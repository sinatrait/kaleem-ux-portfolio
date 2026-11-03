"use client";

import { useEffect, useRef, useState, type ComponentProps } from "react";

type RevealProps = ComponentProps<"div">;

export default function Reveal({ className = "", ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setEntered(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEntered(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${entered ? "reveal-enter" : ""} ${className}`}
      {...props}
    />
  );
}
