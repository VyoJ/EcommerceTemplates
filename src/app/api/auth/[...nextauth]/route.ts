import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id:'next-auth-credentials',
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const axios = require("axios");
        console.log(credentials);

        const options = {
          // params: {
          //   email: credentials?.email,
          //   password: credentials?.password,
          // },
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        };
        const res = await axios.post(
          "http://localhost:3000/api/auth/login",
          credentials,
          options
        );
        console.log("res",res)
        try{
          const user = await res.data;
          console.log("user",user)
          if (user) return user;
        }
        catch(err){
         console.log("err",err);
         return null;
        }
        
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
