"use client";
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import useStore from "@/store/useStore";

const Header = () => {
  const { headerText } = useStore();

  return (
    <div className="bg-mycolorlightprimary dark:bg-mycolordarkprimary shadow-sm top-0">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link
          href="/about"
          className="text-2xl text-white font-bold hover:text-blue-500 dark:hover:slate-100"
        >
          {headerText}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-white font-bold hover:underline">
            Home
          </Link>
          <Link href="/about" className="text-white font-bold hover:underline">
            About
          </Link>
          <Link href="/blog" className="text-white font-bold hover:underline">
            Blog
          </Link>
          <Link href="/blog2" className="text-white font-bold hover:underline">
            Blog2
          </Link>
          <Link
            href="/contact"
            className="text-white font-bold hover:underline"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Button variant="secondary">
            <Search />
          </Button>
          <Link href="/login">
            <Button variant="secondary">
              <User />
            </Button>
          </Link>
          <MobileMenu />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
