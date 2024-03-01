import React, { useEffect, useRef, useState } from "react";

interface Props {
  children: any;
  style?: any;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  [x: string]: any;
}

export const UIFade = ({
  children,
  style,
  left = true,
  right,
  top,
  bottom,
  ...props
}: Props) => {
  const [step, setStep] = useState(0);
  const ref: any = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: any) => {
        if (entry.isIntersecting) {
          setStep((prev) => (prev === 0 ? 1 : 2));
          setTimeout(() => setStep(2), 300);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return React.cloneElement(children, {
    ...props,
    ref: ref,
    style: {
      ...style,
      transform:
        step == 2 || step == 0
          ? "none"
          : `translate(${right ? "100%" : left ? "-100%" : "0"}, ${
              top ? "-100%" : bottom ? "100%" : "0"
            })`,
      opacity: step == 2 ? "1" : "0",
      transition: step == 2 ? "1s" : "0s",
    },
  });
};
