import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// export default withAuth({
//   pages: {
//     signIn: "/",
//     error: "/notfound",
//   },
// });

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log("req", req.nextauth);
    if (
      req.nextUrl.pathname === "/dashboard" &&
      req.nextauth.token?.isAdmin !== true
    ) {
      return new NextResponse("You are not authorized!");
    }
  },
  {
    callbacks: {
      authorized: (params) => {
        let { token } = params;
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    // "/users/:path*" //use this syntax for nested routes,
    "/newpost",
    "/postslist",
    "/settings",
  ],
};
