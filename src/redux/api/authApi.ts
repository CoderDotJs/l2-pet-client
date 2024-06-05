import { baseApi } from "./baseApi";

const extendedApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createAdoption: build.mutation({
      query: (data) => ({
        url: "/pets/adoptions",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: "/auth/change-password",
        method: "POST",
        data: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useCreateAdoptionMutation, useChangePasswordMutation } =
  extendedApi;
