import Link from "next/link";
import SpotWidget from "@/components/SpotWidget";
import site from "@/data/site.json";

export default function Home(){
  return (
    <div>
      <section className="hero">
        <div className="card">
          <h1 className="h1">Buy Silver & Gold Bullion Online in Canada</h1>
          <p className="muted">
            Transparent pricing, secure packaging, and fast communication. Join our live sales on Facebook and Whatnot.
          </p>
          <div className="kv">
            <span>Courtenay, BC shipping hub</span>
            <span>Insured shipping</span>
            <span>Anti-fraud verification</span>
          </div>
          <div style={{marginTop:14, display:"flex", gap:10, flexWrap:"wrap"}}>
            <Link className="btn primary" href="/shop">Shop 1 oz Silver</Link>
            <Link className="btn" href="/live-sales">Watch Live Sales</Link>
            <Link className="btn" href="/contact">Get a Quote</Link>
          </div>
        </div>
        {/* @ts-expect-error Async Server Component */}
        <SpotWidget />
      </section>

      <section className="grid3" style={{marginTop:10}}>
        <div className="card">
          <div className="h2">E-Transfer / Wire</div>
          <div className="muted">Start with low-risk payment options. Invoicing available for larger orders.</div>
        </div>
        <div className="card">
          <div className="h2">Live Deals</div>
          <div className="muted">Weekly drops, bundles, and auctions via Facebook Live & Whatnot.</div>
        </div>
        <div className="card">
          <div className="h2">Authenticity</div>
          <div className="muted">Sourced from recognized distributors. Testing & intake procedures for buybacks.</div>
        </div>
      </section>

      <section style={{marginTop:18}} className="card">
        <div className="h2">Where to find us</div>
        <p className="muted">Online-first business based near Courtenay, BC. Storefront coming later for pickup/appointments.</p>
        <div className="kv">
          <span>Facebook: {site.facebookLiveUrl}</span>
          <span>Whatnot: {site.whatnotUrl}</span>
        </div>
      </section>
    </div>
  )
}
