import { Tent } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Button size="icon" asChild>
        <Link href={"/"}>
          <Tent className="w-6 h-6" />
        </Link>
      </Button>

      <p>Drift Away</p>
    </div>
  );
};

export default Logo;
