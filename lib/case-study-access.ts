import { createHash, createHmac, timingSafeEqual } from "node:crypto"

export const CASE_STUDY_ACCESS_COOKIE = "case-study-access"

export function isCaseStudyPasswordValid(candidate: string, configuredPassword: string) {
  const candidateHash = createHash("sha256").update(candidate).digest()
  const configuredHash = createHash("sha256").update(configuredPassword).digest()
  return timingSafeEqual(candidateHash, configuredHash)
}

export function createCaseStudyAccessToken(password: string) {
  return createHmac("sha256", password).update("case-study-access-v1").digest("hex")
}

export function isCaseStudyAccessTokenValid(token: string | undefined, password: string | undefined) {
  if (!token || !password || !/^[a-f0-9]{64}$/i.test(token)) return false

  const expectedToken = Buffer.from(createCaseStudyAccessToken(password), "hex")
  const receivedToken = Buffer.from(token, "hex")
  return timingSafeEqual(receivedToken, expectedToken)
}
