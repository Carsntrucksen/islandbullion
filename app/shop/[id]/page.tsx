import products from "@/data/products.json";
import { notFound } from "next/navigation";
import { getSpotCadPerOz } from "@/lib/spot";
import { retailPrice } from "@/lib/pricing";
import Link from "next/link";

export default async function ProductPage({ params }: { params: { id: string } }){
  const product = products.find(p => p.id === params.id);
  if(!product) return notFound();
  const spot = await getSpotCadPerOz();
  const price = retailPrice(spot, product.premiumCad, product.weightOz);

  const invoiceEmailSubject = encodeURIComponent(`Order Request: ${product.name} (${product.sku})`);
  const invoiceEmailBody = encodeURIComponent(
`Hi,
I'd like to order:
- Product: ${product.name}
- SKU: ${product.sku}
- Quantity: __
- Ship to (City/Province/Postal): __
- Preferred payment: E-Transfer / Wire

Please send an invoice and payment instructions.
Thanks!`
  );

  return (
    <div className="card">
      <div className="muted small"><Link href="/shop">← Back to Shop</Link></div>
      <h1 className="h1" style={{fontSize:34}}>{product.name}</h1>
      <div className="kv">
        <span>Type: {product.type}</span>
        <span>Purity: {product.purity}</span>
        <span>Brand: {product.brand}</span>
        <span>Weight: {product.weightOz} oz</span>
        <span>SKU: {product.sku}</span>
      </div>

      <p className="muted" style={{marginTop:10}}>{product.description}</p>

      <div className="grid2" style={{marginTop:14}}>
        <div className="card">
          <div className="h2">Price</div>
          <div className="price">${price.toFixed(2)} CAD</div>
          <div className="muted small">Spot: ${spot.toFixed(2)} • Premium: ${product.premiumCad.toFixed(2)}</div>
          <div className="muted small">Final invoice may adjust for spot moves & availability.</div>
        </div>
        <div className="card">
          <div className="h2">Order</div>
          <div className="muted">Start with invoicing (recommended for bullion).</div>
          <div style={{marginTop:10, display:"flex", gap:10, flexWrap:"wrap"}}>
            <a className="btn primary" href={`mailto:islandbullion@gmail.com?subject=${invoiceEmailSubject}&body=${invoiceEmailBody}`}>Request Invoice</a>
            <Link className="btn" href="/policies/shipping">Shipping policy</Link>
            <Link className="btn" href="/contact">Contact</Link>
          </div>
          <div className="muted small" style={{marginTop:10}}>We may request ID verification for anti-fraud and compliance.</div>
        </div>
      </div>
    </div>
  )
}
