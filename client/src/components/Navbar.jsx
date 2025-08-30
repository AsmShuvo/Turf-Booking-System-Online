import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", href: "#" },
    { label: "Find Turf", href: "/find" },
    { label: "How It Works", href: "/how" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link to={"/"} className="flex items-center gap-2">
            {/*logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-6 w-6 text-green-600"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 0 1 4.5 1.4l-2.1 2.1A5.5 5.5 0 0 0 12 7a5.5 5.5 0 0 0-2.4.6L7.5 5.4A8 8 0 0 1 12 4Zm-7.2 9.5a8 8 0 0 1 0-3l2.8-.6a5.5 5.5 0 0 0 0 4.2l-2.8.6ZM12 20a8 8 0 0 1-4.5-1.4l2.1-2.1c.74.31 1.54.48 2.4.48.86 0 1.66-.17 2.4-.48l2.1 2.1A8 8 0 0 1 12 20Zm7.2-6.5-2.8-.6a5.5 5.5 0 0 0 0-4.2l2.8-.6a8 8 0 0 1 0 5.4Z" />
            </svg>
            <span className="text-xl font-semibold tracking-tight">
              <span className="text-green-600">Turf</span>Book
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-gray-700 hover:text-green-700 transition-colors"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#login"
              className="px-4 py-2 rounded-xl border border-green-600 text-green-700 hover:bg-green-50 text-sm font-medium transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              className="px-4 py-2 rounded-xl bg-green-600 text-white hover:bg-green-700 text-sm font-medium transition-colors shadow-sm"
            >
              Sign Up
            </a>
          </div>

          {/* Mobile/Tablet menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-xl p-2 border border-gray-200 text-gray-700 hover:bg-gray-50"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile/Tablet panel */}
        {open && (
          <div className="lg:hidden pt-2 pb-4 animate-in fade-in-0 slide-in-from-top-2">
            <div className="flex flex-col gap-1 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-700"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="#login"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-green-600 px-4 py-2 text-center text-sm font-medium text-green-700 hover:bg-green-50"
                >
                  Login
                </a>
                <a
                  href="#signup"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-green-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-green-700"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
