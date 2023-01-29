import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const crupApi = createApi({
    reducerPath: 'api',
    mode: "cors",
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'http://localhost:5000'
  }),
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
      addtoCart:builder.mutation({
        query:(id , product )=>({
          url:`/user/addToCart/${id}`,
          method:"POST",
          body:product
        })
      })
    })
  })
  

  export const { useGetProductsQuery , useGetProductQuery , useAddNewUserMutation , useAddtoCartMutation } = crupApi