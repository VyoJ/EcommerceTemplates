import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const axios = require("axios");
        console.log(credentials);
        const options = {
          method: "POST",
          params: {
            username: credentials?.username,
            password: credentials?.password,
          },
          headers: { "Content-Type": "application/json" },
        };
        const res = await axios.request(
          "http://localhost:3000/api/auth/login",
          options
        );
        const user = await res.json();

        if (user) return user;
        else return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
