"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface VisibilityContextType {
  isTopVisible: boolean;
  setTopIsVisible: (isVisible: boolean) => void;
}

const HeroVisibilityContext = createContext<VisibilityContextType | undefined>(
  undefined
);

export const VisibilityProvider = ({ children }: { children: ReactNode }) => {
  const [isTopVisible, setTopIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      const docHeight = document.documentElement.scrollHeight;

      const viewportHeight = window.innerHeight;

      const totalScrollable = docHeight - viewportHeight;

      if (totalScrollable <= 0) {
        setTopIsVisible(true);
        return;
      }

      const threshold = totalScrollable * 0.2;
      const shouldBeVisible = currentScrollPos <= threshold;

      setTopIsVisible((prevIsVisible) => {
        if (shouldBeVisible !== prevIsVisible) {
          return shouldBeVisible;
        }
        return prevIsVisible;
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeroVisibilityContext.Provider value={{ isTopVisible, setTopIsVisible }}>
      {children}
    </HeroVisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  const context = useContext(HeroVisibilityContext);
  if (context === undefined) {
    throw new Error(
      "useHeroVisibility must be used within a HeroVisibilityProvider"
    );
  }
  return context;
};
