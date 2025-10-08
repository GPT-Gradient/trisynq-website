// Xynergy API Integration Layer
// This service layer provides integration points for the Xynergy platform

const API_BASE_URL = process.env.NEXT_PUBLIC_XYNERGY_API_URL || 'https://api.xynergy.io/v1';

export interface XynergyResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ContentUpdate {
  page: string;
  section: string;
  content: any;
}

export interface MetricsData {
  betaParticipants: number;
  projectProgress: Record<string, number>;
  communityMembers: number;
  successStories: number;
}

export class XynergyAPI {
  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<XynergyResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.XYNERGY_API_KEY}`,
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.message || 'API request failed' };
      }

      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  static async getContent(page: string, section?: string): Promise<XynergyResponse<any>> {
    const query = section ? `?section=${section}` : '';
    return this.request(`/content/${page}${query}`);
  }

  static async updateContent(update: ContentUpdate): Promise<XynergyResponse<any>> {
    return this.request(`/content/${update.page}`, {
      method: 'PUT',
      body: JSON.stringify(update),
    });
  }

  static async getMetrics(): Promise<XynergyResponse<MetricsData>> {
    return this.request('/metrics');
  }

  static async submitBetaApplication(data: any): Promise<XynergyResponse<any>> {
    return this.request('/beta/apply', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async submitContact(data: any): Promise<XynergyResponse<any>> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export default XynergyAPI;
