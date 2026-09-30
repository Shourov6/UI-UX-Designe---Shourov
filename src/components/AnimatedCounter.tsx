import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 1500,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Parse prefix, number, suffix
    // e.g. "+68%" -> prefix="+", number=68, suffix="%"
    // e.g. "130+" -> prefix="", number=130, suffix="+"
    // e.g. "1.8s" -> prefix="", number=1.8, suffix="s"
    // e.g. "4.9 ★" -> prefix="", number=4.9, suffix=" ★"
    // e.g. "+3.4x" -> prefix="+", number=3.4, suffix="x"
    // e.g. "-45%" -> prefix="-", number=45, suffix="%"
    const match = value.match(/^([^\d.]*)([\d.]+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || '';
    const isDecimal = match[2].includes('.');

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentNum = targetNumber * easeProgress;

            const formattedNum = isDecimal
              ? currentNum.toFixed(1)
              : Math.round(currentNum).toString();

            setDisplayValue(`${prefix}${formattedNum}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  // Show animated value during animation, target value after completion
  const showValue = hasAnimated ? displayValue : '0';

  return (
    <span ref={ref} className={className}>
      {showValue}
    </span>
  );
};
