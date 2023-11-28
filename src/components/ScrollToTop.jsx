import React, { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return <Outlet />;
};

export default ScrollToTop;
