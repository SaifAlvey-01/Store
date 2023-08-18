import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions  = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    CredentialsProvider({
     
      name: "Credentials",

     

      credentials: {
        
        username: { label: "Username", type: "text ", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

        
        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null
  
          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        
      },

    }),
    CredentialsProvider({
      id: "intranet-credentials",
      name: "Two Factor Auth",
      async authorize(credentials, req) {
        const user = {
          /* add function to get user */
        }
        return user
      },
      credentials: {
        username: { label: "Username", type: "text ", placeholder: "jsmith" },
        "2fa-key": { label: "2FA Key" },
      },
    }),
    /* ... additional providers ... /*/
  ],
  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin"
      return token
    },
  },
}

export default NextAuth(authOptions)
