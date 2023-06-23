import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";


export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useQuery({
  queryKey:['platforms'],
  queryFn:()=> 
    apiClient
      .get<FetchResponse<Platform>>('/platforms/lists/parents')
      .then(res=>res.data) ,
  staleTime:27*60*60*1000,//24H
});

export default usePlatforms;
