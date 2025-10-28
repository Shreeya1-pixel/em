/**
 * Emergent++ API Client
 * Provides type-safe methods to interact with the backend API
 */

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Memory {
  id: string;
  session_id: string;
  content: string;
  category: 'idea' | 'goal' | 'project' | 'note';
  tags: string[];
  created_at: Date;
  updated_at: Date;
}

export interface Startup {
  id: string;
  session_id: string;
  name: string;
  description: string;
  stage: 'idea' | 'mvp' | 'launch' | 'growth' | 'scale';
  metrics: {
    users: number;
    revenue: number;
    funding: number;
    team_size: number;
    growth_rate: number;
  };
  milestones: any[];
  created_at: Date;
  updated_at: Date;
}

export interface Design {
  id: string;
  session_id: string;
  title: string;
  prompt: string;
  image_url: string;
  design_type: 'slide' | 'mockup' | 'visual' | 'logo';
  created_at: Date;
}

export class EmergentAPI {
  private apiKey?: string;

  constructor(apiKey?: string) {
    this.apiKey = apiKey;
  }

  /**
   * Set user's OpenAI API key
   */
  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Chat with Emergent++ AI
   */
  async chat(message: string, sessionId: string): Promise<{ response: string; session_id: string }> {
    const response = await fetch(`${API_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        session_id: sessionId,
        user_api_key: this.apiKey,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Chat request failed');
    }

    return response.json();
  }

  /**
   * Get chat history
   */
  async getChatHistory(sessionId: string, limit = 20): Promise<Message[]> {
    const response = await fetch(`${API_BASE_URL}/api/chat/history/${sessionId}?limit=${limit}`);
    
    if (!response.ok) throw new Error('Failed to fetch chat history');
    
    const data = await response.json();
    return data.messages;
  }

  /**
   * Create a memory
   */
  async createMemory(
    sessionId: string,
    content: string,
    category: Memory['category'],
    tags: string[] = []
  ): Promise<Memory> {
    const response = await fetch(`${API_BASE_URL}/api/memory`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ session_id: sessionId, content, category, tags }),
    });

    if (!response.ok) throw new Error('Failed to create memory');
    
    const data = await response.json();
    return data.memory;
  }

  /**
   * Get memories
   */
  async getMemories(sessionId: string, category?: Memory['category']): Promise<Memory[]> {
    const url = category 
      ? `${API_BASE_URL}/api/memory/${sessionId}?category=${category}`
      : `${API_BASE_URL}/api/memory/${sessionId}`;
    
    const response = await fetch(url);
    
    if (!response.ok) throw new Error('Failed to fetch memories');
    
    const data = await response.json();
    return data.memories;
  }

  /**
   * Search memories
   */
  async searchMemories(sessionId: string, query: string): Promise<Memory[]> {
    const response = await fetch(`${API_BASE_URL}/api/memory/search/${sessionId}?q=${encodeURIComponent(query)}`);
    
    if (!response.ok) throw new Error('Failed to search memories');
    
    const data = await response.json();
    return data.memories;
  }

  /**
   * Delete memory
   */
  async deleteMemory(memoryId: string): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/api/memory/${memoryId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete memory');
    
    const data = await response.json();
    return data.success;
  }

  /**
   * Create startup
   */
  async createStartup(sessionId: string, name: string, description: string): Promise<Startup> {
    const response = await fetch(`${API_BASE_URL}/api/startup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        session_id: sessionId, 
        name, 
        description,
        user_api_key: this.apiKey 
      }),
    });

    if (!response.ok) throw new Error('Failed to create startup');
    
    const data = await response.json();
    return data.startup;
  }

  /**
   * Get startups
   */
  async getStartups(sessionId: string): Promise<Startup[]> {
    const response = await fetch(`${API_BASE_URL}/api/startup/${sessionId}`);
    
    if (!response.ok) throw new Error('Failed to fetch startups');
    
    const data = await response.json();
    return data.startups;
  }

  /**
   * Get startup details
   */
  async getStartup(startupId: string): Promise<Startup> {
    const response = await fetch(`${API_BASE_URL}/api/startup/detail/${startupId}`);
    
    if (!response.ok) throw new Error('Failed to fetch startup');
    
    const data = await response.json();
    return data.startup;
  }

  /**
   * Simulate startup growth
   */
  async simulateStartup(startupId: string, months = 6): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/api/startup/simulate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        startup_id: startupId, 
        months,
        user_api_key: this.apiKey 
      }),
    });

    if (!response.ok) throw new Error('Failed to simulate startup');
    
    return response.json();
  }

  /**
   * Delete startup
   */
  async deleteStartup(startupId: string): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/api/startup/${startupId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete startup');
    
    const data = await response.json();
    return data.success;
  }

  /**
   * Generate design
   */
  async generateDesign(
    sessionId: string,
    prompt: string,
    designType: Design['design_type']
  ): Promise<Design> {
    const response = await fetch(`${API_BASE_URL}/api/canvas/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        prompt,
        design_type: designType,
        user_api_key: this.apiKey,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'Failed to generate design');
    }
    
    const data = await response.json();
    return data.design;
  }

  /**
   * Get designs
   */
  async getDesigns(sessionId: string): Promise<Design[]> {
    const response = await fetch(`${API_BASE_URL}/api/canvas/${sessionId}`);
    
    if (!response.ok) throw new Error('Failed to fetch designs');
    
    const data = await response.json();
    return data.designs;
  }

  /**
   * Delete design
   */
  async deleteDesign(designId: string): Promise<boolean> {
    const response = await fetch(`${API_BASE_URL}/api/canvas/${designId}`, {
      method: 'DELETE',
    });

    if (!response.ok) throw new Error('Failed to delete design');
    
    const data = await response.json();
    return data.success;
  }

  /**
   * Get session summary
   */
  async getSessionSummary(sessionId: string): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/api/session/${sessionId}/summary`);
    
    if (!response.ok) throw new Error('Failed to fetch session summary');
    
    return response.json();
  }

  /**
   * Health check
   */
  async healthCheck(): Promise<{ status: string; service: string }> {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    
    if (!response.ok) throw new Error('Health check failed');
    
    return response.json();
  }
}

// Export singleton instance
export const api = new EmergentAPI();

// Export hook for React components
export function useEmergentAPI(apiKey?: string) {
  const apiClient = new EmergentAPI(apiKey);
  return apiClient;
}
