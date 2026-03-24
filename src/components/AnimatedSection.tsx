"use client";

import { useEffect, useRef, ReactNode, useCallback } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const makeVisible = useCallback(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;
    hasAnimated.current = true;
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    el.classList.add("visible");
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If already marked visible (e.g. from a previous mount), skip
    if (el.classList.contains("visible")) {
      hasAnimated.current = true;
      return;
    }

    // Check if we got here via back/forward navigation
    const navEntries = performance.getEntriesByType(
      "navigation"
    ) as PerformanceNavigationTiming[];
    const isBackForward =
      navEntries.length > 0 && navEntries[0].type === "back_forward";

    if (isBackForward) {
      // Skip animation entirely on back/forward nav
      el.style.transition = "none";
      makeVisible();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            makeVisible();
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    // Safety fallback: if nothing triggered after 3s, show anyway
    const fallback = setTimeout(() => {
      makeVisible();
    }, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [delay, makeVisible]);

  return (
    <div ref={ref} className={`animate-in ${className}`}>
      {children}
    </div>
  );
}
