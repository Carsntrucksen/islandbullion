import shipping from "@/data/shipping.json";
import Link from "next/link";

export default function ShippingRates(){
  return (
    <div>
      <div className="card">
        <h1 className="h1" style={{fontSize:32}}>Shipping Rates</h1>
        <p className="muted">
          Example rate table. Update to match your carrier pricing and insurance requirements.
          See our <Link href="/policies/shipping">Shipping Policy</Link> for full details.
        </p>
        <div className="kv">
          <span>Free shipping over: ${shipping.freeShippingOverCad} CAD (example)</span>
          <span>Insured & tracked</span>
          <span>Signature may be required</span>
        </div>
      </div>

      <div className="card" style={{marginTop:14}}>
        <table className="table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Region</th>
              <th>ETA</th>
              <th>Rate (CAD)</th>
            </tr>
          </thead>
          <tbody>
            {shipping.rates.map((r, idx) => (
              <tr key={idx}>
                <td>{r.service}</td>
                <td>{r.region}</td>
                <td>{r.eta}</td>
                <td>${Number(r.priceCad).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted small" style={{marginTop:12}}>{shipping.note}</p>
      </div>
    </div>
  )
}
