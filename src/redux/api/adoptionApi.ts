import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPet: build.mutation({
      query: (data) => ({
        url: '/pets',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['adoption'],
    }),
    getSingleAdoption: build.query({
      query: () => ({
        url: '/pets/adoptions/pets',
        method: 'GET',
      }),
      providesTags: ['adoption'],
    }),
    // getAllPets: build.query({
    //   query: (query) => ({
    //     url: '/pets',
    //     method: 'GET',
    //     params: query,
    //   }),
    //   providesTags: ['pet'],
    // }),
  }),
});

export const { useAddPetMutation, useGetSingleAdoptionQuery } = extendedApi;
