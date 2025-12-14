export function getSiteName(): string {
  if ("SITE_NAME" in process.env) {
    return process.env.SITE_NAME as string
  }

  console.warn("ENV 'SITE_NAME' has no value, using default:", "Web-SyncPlay")
  return "Web-SyncPlay"
}

export function getSiteDomain(): string {
  if ("PUBLIC_DOMAIN" in process.env) {
    const domain = process.env.PUBLIC_DOMAIN as string
    return domain.replace(/\/+$/, "")
  }

  console.warn("ENV 'PUBLIC_DOMAIN' has no value, using default:", "https://web-syncplay.de")
  return "https://web-syncplay.de"
}

export function getRedisURL(): string {
  if ("REDIS_URL" in process.env) {
    return process.env.REDIS_URL as string
  }

  console.warn("ENV 'REDIS_URL' has no value, using default:", "redis://localhost:6379")
  return "redis://localhost:6379"
}

export function getDefaultSrc(): string {
  if ("DEFAULT_SRC" in process.env) {
    return process.env.DEFAULT_SRC as string
  }

  // console.warn("ENV 'DEFAULT_SRC' has no value, using no src")
  return "https://youtu.be/c-FKlE3_kHo"
}
