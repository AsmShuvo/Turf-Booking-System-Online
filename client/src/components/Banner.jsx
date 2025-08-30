import { useState } from "react";

export default function Banner() {
  const [query, setQuery] = useState("");

  return (
    <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"> 
      <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/20 shadow-lg"> 
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1682435573900-b55886ec0e0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
          aria-hidden
        /> 
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-green-900/70" aria-hidden />
 
        <div className="relative mx-auto max-w-3xl px-6 py-14 text-center text-white sm:py-20">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Book your turf, play your game
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/85 sm:text-lg">
            Find and book the best football turfs near you in just a few clicks
          </p>

          {/* Search bar */}
          <form
            className="mx-auto mt-6 flex w-full max-w-xl items-center gap-2"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="turf-search" className="sr-only">
              Find turf near me
            </label>
            <input
              id="turf-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Find turf near me"
              className="flex-1 rounded-full bg-white/95 px-5 py-3 text-gray-800 placeholder-gray-500 shadow-md outline-none ring-1 ring-black/5 focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500 focus-visible:ring-offset-transparent"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
