// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

// export const SwApi = createApi({
//     reducerPath: 'swApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://swapi.dev/api/',
//     }),
//     endpoints: (build) => ({
//         // The query accepts a number and returns a Post
//         getPeople: build.query<Post, number>({
//             // note: an optional `queryFn` may be used in place of `query`
//             query: (id) => ({ url: `people/${id}` }),
//             // Pick out data and prevent nested properties in a hook or selector
//             transformResponse: (response: { data: Post }, meta, arg) => response.data,
//             // Pick out errors and prevent nested properties in a hook or selector
//         }),
//     }),
// })
