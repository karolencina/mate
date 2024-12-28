"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    const onboarded = localStorage.getItem("onboarded");
    if (onboarded) {
      router.push("/home");
    } else {
      router.push("/onboarding");
    }
  }, [router]);

  return <div className={styles.page}></div>;
}

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <div className="image-container">
//         <Image
//           src="/images/mate.png"
//           alt="Mate Gourd"
//           layout={"fill"}
//           objectFit={"contain"}
//         />
//       </div>
//     </div>
//   );
// }
