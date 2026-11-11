import { NextRequest, NextResponse } from "next/server"
import { CASE_STUDY_ACCESS_COOKIE, isCaseStudyAccessTokenValid } from "./lib/case-study-access"

const publicCaseStudyThumbnails = new Set([
  "/case-studies/racial-justice-usability-testing.jpg",
  "/case-studies/ai-agent-interface.png",
  "/case-studies/okx/final-product-slide.jpg",
])

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isAccessRoute = pathname === "/case-studies/access" || pathname === "/case-studies/access/"
  const isPublicThumbnail = publicCaseStudyThumbnails.has(pathname)
  const optimizedImagePath = pathname === "/_next/image" ? request.nextUrl.searchParams.get("url") : null
  const isProtectedPage = pathname.startsWith("/case-studies/") && !isAccessRoute && !isPublicThumbnail
  const isProtectedImage =
    optimizedImagePath?.startsWith("/case-studies/") &&
    !publicCaseStudyThumbnails.has(optimizedImagePath)

  if (!isProtectedPage && !isProtectedImage) {
    return NextResponse.next()
  }

  const password = process.env.CASE_STUDY_PASSWORD
  const token = request.cookies.get(CASE_STUDY_ACCESS_COOKIE)?.value

  if (isCaseStudyAccessTokenValid(token, password)) {
    const response = NextResponse.next()
    response.headers.set("Cache-Control", "private, no-store")
    return response
  }

  const accessUrl = new URL("/case-studies/access", request.url)
  accessUrl.searchParams.set(
    "returnTo",
    isProtectedPage ? `${pathname}${request.nextUrl.search}` : "/case-studies/ai-agent",
  )
  if (!password) accessUrl.searchParams.set("error", "setup")
  return NextResponse.redirect(accessUrl)
}

export const config = {
  matcher: ["/case-studies/:path*", "/_next/image"],
}
