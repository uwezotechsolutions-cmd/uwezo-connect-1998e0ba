import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "motion/react";

export function Counter({ to, suffix = "", prefix = "", duration = 2 }: { to: number; suffix?: string; prefix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{prefix}{Math.round(val).toLocaleString()}{suffix}</span>;
}
