import { useEffect, useState } from "react";
import axios from "axios";

const Turfs = () => {
  const [turfs, setTurfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  // read server URL from env
  const API = import.meta.env.VITE_API_URL || "http://localhost:3000"; // fallback

  useEffect(() => {
    let cancelled = false;

    axios
      .get(`${API}/api/turfs`)
      .then((res) => {
        if (!cancelled) setTurfs(res.data?.turfs || []);
      })
      .catch((e) => {
        if (!cancelled) setErr(e.response?.data?.message || e.message || "Failed to load turfs");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [API]);

  if (loading) return <div className="p-6 text-gray-600">Loading turfs…</div>;
  if (err) return <div className="p-6 text-red-600">Error: {err}</div>;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        {turfs.length} available turfs
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {turfs.map((turf) => (
          <article key={turf.id} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white">
            <div className="h-44 w-full bg-cover bg-center" style={{ backgroundImage: `url(${turf.turf_bg})` }} />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{turf.name}</h3>
              <p className="text-sm text-gray-600">{turf.location}</p>

              <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-gray-700">
                <div>Capacity: <span className="font-medium">{turf.capacity}</span></div>
                <div>Hours: <span className="font-medium">{turf.operating_hours}</span></div>
                <div>Rent/hr: <span className="font-medium">₹{Number(turf.rent_per_hour).toFixed(2)}</span></div>
                <div className="flex items-center gap-1">Rating: <Stars value={Number(turf.rating)} /></div>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                <div>☎ {turf.contact_number}</div>
                <div>✉ {turf.contact_email}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

function Stars({ value = 0 }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;
  return (
    <span className="ml-1 inline-flex items-center">
      {Array.from({ length: 5 }).map((_, i) => {
        const state = i < full ? "full" : i === full && half ? "half" : "empty";
        return <Star key={i} state={state} />;
      })}
      <span className="ml-1 text-gray-600 text-xs">({value.toFixed(1)})</span>
    </span>
  );
}

function Star({ state }) {
  if (state === "half") {
    return (
      <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path fill="url(#half)" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2" />
        <path fill="none" stroke="currentColor" strokeWidth="1.2" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2l-2.81 6.62L2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
  }
  if (state === "full") {
    return (
      <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );
}

export default Turfs;
