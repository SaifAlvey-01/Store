import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString();
}

export const users = [
  {
    id: "1",
    name: "J Smith",
    email: "jsmith@example.com",
    phone: "+923335554656",
    passwordHash: simpleHash("jsmithPassword"),
  },
  {
    id: "2",
    name: "Syed Sakhawat",
    email: "sakhawatsyed4@gmail.com",
    phone: "+922345678912",
    passwordHash: simpleHash("abc123"),
  },
];

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username or Phone",
          type: "text",
          placeholder: "jsmith or +1234567890",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const matchingUser = users.find(
          (user) =>
            (credentials.username === user.email ||
              credentials.username === user.phone) &&
            simpleHash(credentials.password) === user.passwordHash
        );

        return matchingUser || null;
      },
    }),
    // ... your other providers ...
  ],
  // ... your other configurations ...
};

export default NextAuth(authOptions);
