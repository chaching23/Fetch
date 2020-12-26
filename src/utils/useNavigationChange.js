import React, { useEffect } from "react";

export default function useNavigationChange(props, action) {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("didBlur", () => {
      action();
      console.log("action");
    });
    return () => unsubscribe.remove();
  }, []);
}
