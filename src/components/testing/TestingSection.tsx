"use client";

import { useState } from "react";

/**
 * Internal QA / spike area. Add interactive demos, API checks, or UI experiments here.
 */
const TestingSection = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <section
      className="rounded-2xl border border-primary/20 bg-white px-6 py-8 shadow-sm lg:px-10 lg:py-10"
      aria-labelledby="testing-section-heading"
    >
      <h2
        id="testing-section-heading"
        className="font-league-spartan text-2xl font-bold text-primary lg:text-3xl"
      >
        Testing area
      </h2>
      <p className="mt-3 max-w-2xl font-gilroy-regular text-base text-neutral-700">
        Use this block to try components, flows, or integrations without touching production pages.
        Replace the sample control below with whatever you need to validate.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => setClicks((c) => c + 1)}
          className="rounded-lg bg-primary px-5 py-2.5 font-gilroy-medium text-sm text-white transition hover:opacity-90"
        >
          Sample action
        </button>
        <span className="font-gilroy-regular text-sm text-neutral-600">
          Clicks: {clicks}
        </span>
      </div>
    </section>
  );
};

export default TestingSection;
