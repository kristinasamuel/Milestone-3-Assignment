import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type AuthGuardProps = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: AuthGuardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn === false) {
      router.replace("/"); // redirect if not signed in
    } else {
      setIsLoading(false); // allow rendering if signed in
    }
  }, [isSignedIn, router]);

  if (isLoading) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AuthGuard;

// import AuthGuard from "../components/AuthGuard";

// export default function DashboardPage() {
//   return (
//     <AuthGuard>
//       <h1>Welcome to your Dashboard</h1>
//     </AuthGuard>
//   );
// }