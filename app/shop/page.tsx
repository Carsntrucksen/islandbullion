import Link from "next/link";
import products from "@/data/products.json";
import { getSpotCadPerOz } from "@/lib/spot";
import { retailPrice } from "@/lib/pricing";

export default async function Shop(){
  const spot = await getSpotCadPerOz();
  return (
    <div>
      <div className="card">
        <h1 className="h1" style={{fontSize:32}}>Shop • 1 oz Silver</h1>
        <p className="muted">Prices shown as spot + premium (demo feed). Inventory and pricing update frequently.</p>
        <div className="kv">
          <span>Spot (CAD/oz): ${spot.toFixed(2)}</span>
          <span>Payment: E-Transfer / Wire</span>
          <span>Shipping: Insured</span>
        </div>
      </div>

      <div className="grid3" style={{marginTop:14}}>
        {products.map(p => {
          const price = retailPrice(spot, p.premiumCad, p.weightOz);
          return (
            <Link key={p.id} href={`/shop/${p.id}`} className="card">
              <div className="h2">{p.name}</div>
              <div className="muted small">{p.purity} • {p.brand} • {p.weightOz} oz</div>
              <div style={{marginTop:10}} className="price">${price.toFixed(2)} CAD</div>
              <div className="muted small">Premium: ${p.premiumCad.toFixed(2)} CAD</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
