/** Hard cap for upstream API calls — prevents hung workers / 504s. */
export const API_TIMEOUT_MS = 10_000;

/** ISR window for CMS-backed routes (sitemap, case studies, etc.). */
export const CMS_REVALIDATE_SECONDS = 3600;
