import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
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
      clientId: "126868255686-jmsmtbjg8c1i37och32l4go6hdfc6bsj.apps.googleusercontent.com",
      clientSecret: "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",
    })
  ],
  pages: {
    signIn: '/dashboard', // on successfully signin    
    signOut: '/auth/login', // on signout redirects users to a custom login page.
    error: '/auth/error',  // displays authentication errors
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
 
};

export default NextAuth(authOptions);
