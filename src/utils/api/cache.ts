import { cache } from "react";
import { getBlog } from "./blogs";
import { getCaseStudy } from "./caseStudy";

/** Dedupe upstream calls within a single server request (metadata + page). */
export const getBlogCached = cache(getBlog);
export const getCaseStudyCached = cache(getCaseStudy);
