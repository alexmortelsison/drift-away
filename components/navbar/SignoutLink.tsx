"use client";

import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";

const SignoutLink = () => {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been logged out." });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className="w-full text-left" onClick={handleLogout}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignoutLink;
