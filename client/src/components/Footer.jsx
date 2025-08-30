const Footer = () => {
  const year = new Date().getFullYear();

  const linkCls =
    "block text-sm text-green-50/90 hover:text-white transition-colors";

  return (
    <footer className="mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
        {/* Green panel with rounded top corners */}
        <div className="rounded-t-3xl bg-green-600 text-white shadow-[0_-8px_24px_rgba(0,0,0,0.06)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-10 py-10">

            {/* Col 1 */}
            <div>
              <h4 className="text-white font-semibold mb-3">TurfBook</h4>
              <ul className="space-y-2">
                <li><a href="#about" className={linkCls}>About Us</a></li>
                <li><a href="#how" className={linkCls}>How It Works</a></li>
                <li><a href="#careers" className={linkCls}>Careers</a></li>
                <li><a href="#press" className={linkCls}>Press</a></li>
              </ul>
            </div>

            {/* Col 2 */}
            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2">
                <li><a href="#help" className={linkCls}>Help Center</a></li>
                <li><a href="#contact" className={linkCls}>Contact Us</a></li>
                <li><a href="#faqs" className={linkCls}>FAQs</a></li>
                <li><a href="#terms" className={linkCls}>Terms of Service</a></li>
              </ul>
            </div>

            {/* Col 3 */}
            <div>
              <h4 className="text-white font-semibold mb-3">For Turf Owners</h4>
              <ul className="space-y-2">
                <li><a href="#list" className={linkCls}>List Your Turf</a></li>
                <li><a href="#partner" className={linkCls}>Partner Portal</a></li>
                <li><a href="#ads" className={linkCls}>Advertising</a></li>
                <li><a href="#stories" className={linkCls}>Success Stories</a></li>
              </ul>
            </div>

            {/* Col 4 */}
            <div>
              <h4 className="text-white font-semibold mb-3">Connect With Us</h4>
              <div className="flex items-center gap-3 mb-3">
                {/* Socials (inline SVGs so no extra deps) */}
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                    <path d="M13.5 9H15V6h-1.5C11.57 6 10 7.57 10 9.5V11H8v3h2v5h3v-5h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z"/>
                  </svg>
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                    <path d="M21 5.5c-.7.3-1.5.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.6-1.7-4.5-.9-5.1 1.4-.2.6-.2 1.2 0 1.8-3.3-.2-6.3-1.7-8.3-4.3-.9 1.6-.4 3.7 1.2 4.7-.6 0-1.2-.2-1.7-.5 0 1.8 1.3 3.4 3.1 3.8-.5.1-1 .2-1.5.1.4 1.5 1.8 2.6 3.4 2.6-1.3 1-2.9 1.5-4.5 1.5H3c1.7 1.1 3.7 1.7 5.8 1.7 7 0 10.9-5.9 10.7-11.1.7-.5 1.4-1.2 1.5-2.2Z"/>
                  </svg>
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8Zm6-1.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/><circle cx="12" cy="12" r="2.8"/>
                  </svg>
                </a>
                <a
                  href="#youtube"
                  aria-label="YouTube"
                  className="inline-flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
                    <path d="M21.6 7.3c-.2-.9-.9-1.6-1.8-1.8C18.1 5.2 12 5.2 12 5.2s-6.1 0-7.8.3c-.9.2-1.6.9-1.8 1.8C2 9 2 12 2 12s0 3 .4 4.7c.2.9.9 1.6 1.8 1.8 1.7.3 7.8.3 7.8.3s6.1 0 7.8-.3c.9-.2 1.6-.9 1.8-1.8.3-1.7.4-4.7.4-4.7s0-3-.4-4.7ZM10 15.5v-7l6 3.5-6 3.5Z"/>
                  </svg>
                </a>
              </div>
              <p className="text-sm text-green-50/90 max-w-xs">
                Subscribe to our newsletter for exclusive offers and updates
              </p>
            </div>
          </div>

          {/* bottom bar */}
          <div className="px-6 md:px-10 pb-6">
            <div className="border-t border-white/20 pt-4 text-xs text-green-50/90">
              © {year} TurfBook. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
