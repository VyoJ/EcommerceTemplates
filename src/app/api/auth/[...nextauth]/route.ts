import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const axios = require("axios");
        console.log(credentials);

        const options = {
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
          if (user) return user.data;
        }
        catch(err){
         console.log("err",err);
         return null;
        }
        
      },
    }),
  ],
  session:{
    strategy:"jwt"
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
