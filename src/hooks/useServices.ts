"use client";

import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api-client";
import {Service} from "@/types/service";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => apiFetch<Service[]>("/services"),
  });
}
