import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoption: build.mutation({
      query: (data) => ({
        url: '/pets/adoptions',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['user'],
    }),
  }),
});

export const { useCreateAdoptionMutation } = extendedApi;
