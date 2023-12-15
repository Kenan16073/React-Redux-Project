import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://identitytoolkit.googleapis.com/v1'
    }),

    endpoints(build) {
        return {
            signIn: build.mutation({
                query: (user) => {
                    return {
                        url: `/accounts:signInWithPassword?key=AIzaSyAwl0HfmoeAQzh9PewwFkvHwQOKIlJskv8`,
                        method: 'POST',
                        body: {
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        }
                    }
                }
            })
        }
    }
})



export const { useSignInMutation } = loginApi

export { loginApi };
