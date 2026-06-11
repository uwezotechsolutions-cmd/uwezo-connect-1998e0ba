import { useEffect, useState } from "react";

const TAGLINES = [
  "A global talent marketplace connecting skilled professionals with businesses worldwide.",
  "Where talent meets opportunity — without borders.",
  "Building the future of remote work, one connection at a time.",
];

export function TaglineSlider() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % TAGLINES.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative min-h-[5.5rem] sm:min-h-[4.5rem]" aria-live="polite">
      {TAGLINES.map((t, idx) => (
        <p
          key={idx}
          className={`absolute inset-0 max-w-xl text-lg text-muted-foreground transition-opacity duration-700 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        >
          “{t}”
        </p>
      ))}
      <div className="absolute -bottom-2 left-0 flex gap-1.5 sm:bottom-0">
        {TAGLINES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show tagline ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-primary" : "w-1.5 bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
