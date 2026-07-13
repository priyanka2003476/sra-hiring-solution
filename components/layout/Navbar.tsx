"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Container from "@/components/common/Container";
import PrimaryButton from "@/components/common/PrimaryButton";
import { COMPANY, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/logo/logo.png"
              alt={COMPANY.name}
              width={70}
              height={70}
              priority
              className="h-14 w-auto rounded-lg object-contain"
            />

            <div className="hidden md:block">
              <h1 className="text-xl font-bold tracking-tight text-slate-900">
                {COMPANY.name}
              </h1>

              <p className="text-sm text-slate-500">
                {COMPANY.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="font-medium text-slate-700 transition-colors duration-300 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              {/* <PrimaryButton>
                Hire Talent
              </PrimaryButton> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
              aria-label="Open menu"
            >
              {isOpen ? (
                <X className="h-7 w-7 text-slate-800" />
              ) : (
                <Menu className="h-7 w-7 text-slate-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-600"
              >
                {item.title}
              </Link>
            ))}

            <div className="mt-4">
              {/* <PrimaryButton>
                Hire Talent
              </PrimaryButton> */}
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}