import { useState, useEffect } from 'react';

export function useApi<T>(endpoint: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api${endpoint}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export function useBlogPosts() {
  return useApi<any[]>('/blog');
}

export function useBlogPost(slug: string) {
  return useApi<any>(`/blog/${slug}`);
}

export function useGallery() {
  return useApi<any[]>('/gallery');
}

export function useTestimonials() {
  return useApi<any[]>('/testimonials');
}

export function usePortfolio() {
  return useApi<any[]>('/portfolio');
}

export function useClients() {
  return useApi<any[]>('/clients');
}

export function useSocialLinks() {
  return useApi<any[]>('/social');
}

export function useServices() {
  return useApi<any[]>('/services');
}