import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const registerApi = createApi({
    reducerPath: 'registerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://identitytoolkit.googleapis.com/v1'
    }),

    endpoints(build) {
        return {
            register: build.mutation({
                query: (user) => {
                    return {
                        url: `accounts:signUp?key=AIzaSyAwl0HfmoeAQzh9PewwFkvHwQOKIlJskv8`,
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


export const { useRegisterMutation } = registerApi

export { registerApi };
