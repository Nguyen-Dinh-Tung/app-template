import { useEffect, useState } from "react";

export const useObserver = (ref: any) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: any) => {
        setVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: 0 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return { isVisible };
};
