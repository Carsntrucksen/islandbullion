import Link from "next/link";
import Image from "next/image";
import site from "@/data/site.json";

export default function Header(){
  return (
    <header className="nav">
      <div className="brand">
        <Link href="/" className="brandLink">
          <Image src="/logo.svg" alt={`${site.brandName} logo`} width={34} height={34} />
          <strong>{site.brandName}</strong>
        </Link>
        <span className="badge">Online-first • Canada</span>
      </div>
      <nav className="links">
        <Link className="btn" href="/shop">Shop</Link>
        <Link className="btn" href="/live-sales">Live Sales</Link>
        <Link className="btn" href="/sell-your-bullion">Sell</Link>
        <Link className="btn" href="/policies/shipping">Shipping</Link>
        <Link className="btn primary" href="/contact">Contact</Link>
        <Link className="btn" href="/admin">Admin</Link>
      </nav>
    </header>
  )
}
