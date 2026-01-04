import Link from "next/link";
import site from "@/data/site.json";

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="grid3">
          <div>
            <strong>{site.brandName}</strong>
            <div className="small muted">{site.location}</div>
            {site.domain ? <div className="small muted">{site.domain}</div> : null}
            <div className="small muted">{site.phone}</div>
            <div className="small muted">{site.email}</div>
          </div>
          <div>
            <div className="small"><strong>Policies</strong></div>
            <div className="small muted"><Link href="/policies/shipping">Shipping</Link></div>
            <div className="small muted"><Link href="/policies/returns">Returns</Link></div>
            <div className="small muted"><Link href="/policies/privacy">Privacy</Link></div>
            <div className="small muted"><Link href="/policies/terms">Terms</Link></div>
          </div>
          <div>
            <div className="small"><strong>Live Sales</strong></div>
            <div className="small muted"><Link href="/live-sales">Facebook Live / Whatnot</Link></div>
            <div className="small muted"><Link href="/shop">Shop online</Link></div>
            <div className="small muted"><Link href="/sell-your-bullion">Sell your bullion</Link></div>
          </div>
        </div>
        <div style={{marginTop:16}} className="small muted">
          Pricing updates frequently and may change with spot price and availability. All sales subject to identity verification and anti-fraud checks.
        </div>
      </div>
    </footer>
  )
}
