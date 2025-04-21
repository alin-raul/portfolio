// hooks/useWindowSize.ts (or .js if you're using JSDoc for types)
import { useState, useEffect } from "react";

// Define the type for our state
interface WindowSize {
  width: number | undefined; // Can be a number or undefined
  height: number | undefined; // Can be a number or undefined
}

function useMobileSmallScreen(): WindowSize {
  // Specify the return type of the hook
  // Initialize state with undefined width/height
  // Explicitly tell useState the type it will hold: WindowSize
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      // window.innerWidth/Height are numbers, which are assignable to number | undefined
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Ensure window exists (for SSR)
    if (typeof window !== "undefined") {
      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();
    }

    // Remove event listener on cleanup
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowSize;
}

export default useMobileSmallScreen;
