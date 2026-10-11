import { useEffect } from "react";
import { initializeAnalytics } from "../utils/analytics";

export default function Analytics() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return null;
}

