import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto mt-4">
      <ModeToggle />
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </nav>
  );
};

export default Navbar;
