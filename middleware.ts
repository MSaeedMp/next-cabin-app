import NextAuth from "next-auth";
import authConfig from "./lib/auth.config";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.AUTH_SECRET;
const node_env = process.env.NODE_ENV;
const { auth } = NextAuth(authConfig);

const fetchToken = async (req: NextRequest) => {
  let token;
  if (node_env === "production") {
    token = await getToken({
      req,
      secret,
      cookieName: "__Secure-authjs.session-token",
    });
  } else {
    token = await getToken({
      req,
      secret,
    });
  }
  return token;
};

export default auth(async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await fetchToken(req);
  const role = token?.role;
  if (
    (pathname.startsWith("/api/auth/signin") ||
      pathname.startsWith("/api/auth/signup")) &&
    role
  ) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (pathname.startsWith("/account") && !role) {
    console.log("starts with account");
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: ["/account/:path*", "/api/auth/:path*"],
};
