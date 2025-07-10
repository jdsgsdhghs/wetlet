import React, { useState, useEffect } from "react";
import TourPage from "./TourPage";             // ta version desktop
import TourPageMobile from "./TourPageMobile"; // ta version mobile

export default function TourPageResponsive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <TourPageMobile /> : <TourPage />;
}
