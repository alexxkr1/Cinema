/**
 * https://tanstack.com/query/latest/docs/vue/guides/default-query-function
 */
import { useQuery, useQueryClient, useMutation } from "@tanstack/vue-query";
import { httpClient } from "@/config/axios.config";
import type { Paginated, PaginationParams } from "@/models/pagination.model";
import type { Ref } from "vue";
import type { IMovieWrapper } from "@/models/movie.model";
import axios from "axios";

export function useMoviesQuery(params: Ref<PaginationParams>) {
  return useQuery(["movies", { params }], async () => {
    const { data } = await axios.get<IMovieWrapper[]>(
      `http://localhost:5173/api.json`,
      {
        params: {
          language: params.value.language,
          startDate: params.value.startDate,
          startTime: params.value.startTime,
        },
      }
    );
    return data;
  });
}
