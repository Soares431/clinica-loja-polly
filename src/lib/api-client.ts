const API_URL = process.env.NEXT_PUBLIC_API_URL; // ex: http://localhost:4000/api/v1

export async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
  });
  if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
  return res.json();
}