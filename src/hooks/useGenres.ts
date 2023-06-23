import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = ()=> useQuery({
  queryKey: ['genres'],
  queryFn:()=> apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data),
  staleTime: 1000 * 60 * 60 * 24, // 1 day
})

export default useGenres;
