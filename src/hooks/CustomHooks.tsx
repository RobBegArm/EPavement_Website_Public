import { MouseEvent, useEffect, useState } from "react";
import { Size } from "../types";

export function SmoothScrollTo(event: MouseEvent, href: string): void {
  event.preventDefault();
  //Scroll back to top
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  //Scroll to other links
  else if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    if (sectionEl === null) {
      throw new Error(
        `Error in CustomHooks.ts! sectionEl with href of '${href}' is null!`
      );
    }
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
}

export function useWindowDimensions(): Size {
  const getWindowDimensions = (): Size => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    const handleResize = (): void => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
