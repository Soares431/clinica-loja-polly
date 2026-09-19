import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api-client";
import { Product } from "@/types/product";

export function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiFetch<Product[]>("/product"),
  });
}