import { DependencyList, useEffect } from "react";

export const useEffectAsync = (
  effect: () => Promise<void>,
  deps: DependencyList,
) => {
  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        await effect();
      } catch (err) {
        if (!cancelled) {
          console.error("[useEffectAsync]", err);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
