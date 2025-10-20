/**
 * Intelligence Gateway Client
 * Provides integration with the Intelligence Gateway service for ASO data,
 * beta applications, contact forms, and newsletter subscriptions.
 */

import axios, { AxiosInstance, AxiosError } from 'axios';

interface GatewayConfig {
  baseURL: string;
  apiKey: string;
  timeout?: number;
}

interface ASOOpportunity {
  keyword: string;
  search_volume: number;
  difficulty: number;
  relevance_score: number;
  opportunity_score: number;
  trend: 'rising' | 'stable' | 'declining';
  serp_features: string[];
  generated_at: string;
}

interface BetaApplication {
  company_name: string;
  contact_name: string;
  email: string;
  industry: string;
  phone?: string;
  website?: string;
  goals: string;
  interests?: string[];
  referred_by?: string;
}

interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject?: string;
}

interface NewsletterSubscription {
  email: string;
  source_page: string;
}

class GatewayClient {
  private client: AxiosInstance;

  constructor(config: GatewayConfig) {
    this.client = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 10000,
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': config.apiKey,
      },
    });

    // Response interceptor for error handling
    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        console.error('Gateway API Error:', {
          url: error.config?.url,
          status: error.response?.status,
          message: error.message,
        });
        throw error;
      }
    );
  }

  /**
   * Get ASO opportunities from the Intelligence Gateway
   * @param limit - Number of opportunities to return (default: 10)
   * @returns Array of ASO opportunities
   */
  async getASOOpportunities(limit: number = 10): Promise<ASOOpportunity[]> {
    try {
      const response = await this.client.get('/api/aso/opportunities', {
        params: { limit },
      });
      return response.data.opportunities || [];
    } catch (error) {
      console.error('Failed to fetch ASO opportunities:', error);
      return [];
    }
  }

  /**
   * Submit a beta program application
   * @param data - Beta application data
   * @returns Response with success status and application ID
   */
  async submitBetaApplication(
    data: BetaApplication
  ): Promise<{ success: boolean; application_id?: string; message: string }> {
    try {
      const response = await this.client.post('/api/public/beta', data);
      return response.data;
    } catch (error) {
      console.error('Failed to submit beta application:', error);
      throw error; // Re-throw to let caller handle with proper user message
    }
  }

  /**
   * Submit a contact form
   * @param data - Contact form data
   * @returns Response with success status and submission ID
   */
  async submitContact(
    data: ContactSubmission
  ): Promise<{ success: boolean; submission_id?: string; message: string }> {
    try {
      const response = await this.client.post('/api/public/contact', data);
      return response.data;
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      throw error; // Re-throw to let caller handle with proper user message
    }
  }

  /**
   * Subscribe to newsletter
   * @param data - Newsletter subscription data
   * @returns Response with success status
   */
  async subscribeNewsletter(
    data: NewsletterSubscription
  ): Promise<{ success: boolean; message: string }> {
    const response = await this.client.post('/api/public/newsletter', data);
    return response.data;
  }

  /**
   * Health check for the Gateway service
   * @returns True if the service is healthy, false otherwise
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await this.client.get('/health');
      return response.status === 200;
    } catch {
      return false;
    }
  }
}

// Singleton instance
let gatewayClient: GatewayClient | null = null;

/**
 * Get the Gateway client singleton instance
 * @returns GatewayClient instance
 * @throws Error if Gateway configuration is missing
 */
export function getGatewayClient(): GatewayClient {
  if (!gatewayClient) {
    const baseURL = process.env.NEXT_PUBLIC_GATEWAY_URL;
    const apiKey = process.env.GATEWAY_API_KEY;

    if (!baseURL || !apiKey) {
      throw new Error(
        'Gateway configuration missing: NEXT_PUBLIC_GATEWAY_URL and GATEWAY_API_KEY must be set'
      );
    }

    gatewayClient = new GatewayClient({ baseURL, apiKey });
  }

  return gatewayClient;
}

export type {
  ASOOpportunity,
  BetaApplication,
  ContactSubmission,
  NewsletterSubscription,
};
export { GatewayClient };
