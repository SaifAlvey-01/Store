import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
// Utility function to hash strings.
// function simpleHash(str) {
//   let hash = 0;
//   for (let i = 0; i < str.length; i++) {
//     const char = str.charCodeAt(i);
//     hash = (hash << 5) - hash + char;
//     hash |= 0; // Convert to 32-bit integer
//   }
//   return hash.toString();
// }

// const findUserByCredentials = (username, password) =>
//   users.find(
//     (user) =>
//       (username === user.email || username === user.phone) &&
//       simpleHash(password) === user.passwordHash
//   );

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,

    })
  ],
 
//   callbacks: {
//     redirect: async (url, _baseUrl)=>{
//       if (url === '/user') {
//         return Promise.resolve('/')
//       }
//       return  Promise.resolve('/dashboard')
//     }
// }
 
};

export default NextAuth(authOptions);
