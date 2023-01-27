import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const crupApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: builder => ({
      getProducts: builder.query({
        query: () => '/products'
      }),
      getProduct:builder.query({
        query:(id) => `/products/${id}`  
      }),
      addNewUser: builder.mutation({
        query : details => ({
          url: '/user/register',
          method: 'POST',
          body: details
        })
      }),
      loginUser:builder.mutation({
        query:details=>({
          url:'/user/login',
          method:"POST",
          body:details
        })
      })
    })
  })
  

  export const { useGetProductsQuery , useGetProductQuery , useAddNewUserMutation , useLoginUserMutation } = crupApi