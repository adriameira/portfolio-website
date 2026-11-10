import { NextResponse } from "next/server"
import {
  CASE_STUDY_ACCESS_COOKIE,
  createCaseStudyAccessToken,
  isCaseStudyPasswordValid,
} from "../../../lib/case-study-access"

const DEFAULT_CASE_STUDY_PATH = "/case-studies/ai-agent"
const DEVELOPMENT_ACCESS_MAX_AGE = 60 * 60 * 24 * 90
const PRODUCTION_ACCESS_MAX_AGE = 60 * 60 * 24 * 7
const isProductionEnvironment =
  process.env.VERCEL_ENV === "production" ||
  (!process.env.VERCEL_ENV && process.env.NODE_ENV === "production")

function getSafeReturnTo(value: FormDataEntryValue | null) {
  if (
    typeof value === "string" &&
    value.length <= 2048 &&
    value.startsWith("/case-studies/") &&
    !value.startsWith("//")
  ) {
    return value
  }

  return DEFAULT_CASE_STUDY_PATH
}

function redirectToAccess(request: Request, error: string, returnTo: string) {
  const accessUrl = new URL("/case-studies/access", request.url)
  accessUrl.searchParams.set("error", error)
  accessUrl.searchParams.set("returnTo", returnTo)
  return NextResponse.redirect(accessUrl, 303)
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const returnTo = getSafeReturnTo(formData.get("returnTo"))
  const candidate = formData.get("password")
  const configuredPassword = process.env.CASE_STUDY_PASSWORD

  if (!configuredPassword) {
    return redirectToAccess(request, "setup", returnTo)
  }

  if (
    typeof candidate !== "string" ||
    candidate.length > 256 ||
    !isCaseStudyPasswordValid(candidate, configuredPassword)
  ) {
    return redirectToAccess(request, "invalid", returnTo)
  }

  const isSecureRequest = new URL(request.url).protocol === "https:"
  const response = NextResponse.redirect(new URL(returnTo, request.url), 303)
  response.cookies.set(CASE_STUDY_ACCESS_COOKIE, createCaseStudyAccessToken(configuredPassword), {
    httpOnly: true,
    secure: isSecureRequest,
    sameSite: isSecureRequest ? "none" : "lax",
    partitioned: isSecureRequest,
    maxAge: isProductionEnvironment ? PRODUCTION_ACCESS_MAX_AGE : DEVELOPMENT_ACCESS_MAX_AGE,
    path: "/",
  })
  response.headers.set("Cache-Control", "no-store")
  return response
}
