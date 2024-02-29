import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connect } from "./dbConfig";
import { loginUser } from "@/actions/usersActions";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        try {
          connect();
          let payload = {
            email: credentials?.email,
            password: credentials?.password,
          };

          const dbUser: any = await loginUser(payload);
          return dbUser;
        } catch (err: any) {
          console.log("errr", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token._id = user?._id;
        token.fullName = user?.fullName;
        token.email = user?.email;
        token.isAdmin = user?.isAdmin == true ? true : false;
        token.isKeyAdmin = user?.isKeyAdmin == true ? true : false;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user._id = token?._id;
        session.user.fullName = token?.fullName;
        session.user.email = token?.email;
        session.user.isAdmin = token?.isAdmin == true ? true : false;
        session.user.isKeyAdmin = token?.isKeyAdmin == true ? true : false;
      }
      return session;
    },
  },
  pages: {
    signIn: "/",
    signOut: "/details",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
};

export default authOptions;
