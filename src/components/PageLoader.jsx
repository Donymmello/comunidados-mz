import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Loading from "./Loading";

function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // tempo do loading

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? <Loading /> : children;
}

export default PageLoader;