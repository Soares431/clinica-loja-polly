const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });

  if (!res.ok) {
    const error = new Error(`Erro na API: ${res.status}`) as Error & { status?: number };
    error.status = res.status;
    throw error;
  }

  return res.json();
}