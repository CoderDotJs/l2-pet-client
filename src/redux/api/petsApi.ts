import { baseApi } from './baseApi';

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addPet: build.mutation({
      query: (data) => ({
        url: '/pets',
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['pet'],
    }),
    updateSinglePet: build.mutation({
      query: (query) => ({
        url: `/pets/singlepet/${query?.id}`,
        method: 'PUT',
        data: query?.data,
      }),
      invalidatesTags: ['pet'],
    }),
    deleteSinglePet: build.mutation({
      query: (id) => ({
        url: `/pets/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['pet'],
    }),
    getSinglePet: build.query({
      query: (id) => ({
        url: `/pets/${id}`,
        method: 'GET',
      }),
      providesTags: ['pet'],
    }),
    getAllPets: build.query({
      query: (query) => ({
        url: '/pets',
        method: 'GET',
        params: query,
      }),
      providesTags: ['pet'],
    }),
  }),
});

export const {
  useAddPetMutation,
  useGetAllPetsQuery,
  useGetSinglePetQuery,
  useUpdateSinglePetMutation,
  useDeleteSinglePetMutation,
} = extendedApi;
