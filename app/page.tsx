"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    console.log("localStorage:", localStorage);
    const onboarded = localStorage.getItem("onboarded");

    if (onboarded) {
      console.log("Redirecting to /home"); // Debugging log
      router.push("/home");
    } else {
      console.log("Redirecting to /onboarding"); // Debugging log
      router.push("/onboarding");
    }
  }, [router]);

  return <div>App Component</div>;
}
