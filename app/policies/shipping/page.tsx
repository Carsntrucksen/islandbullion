export default function Page(){
  return (
    <div className="card">
      <h1 className="h1" style={fontSize:32}>Shipping Policy</h1>
      <div className="muted">
        <p><strong>Rates:</strong> See <a href="/shipping">Shipping Rates</a> for an example table you can customize.</p>
<p><strong>Insured shipping:</strong> We ship using tracked, insured services. Signature may be required.</p>
<p><strong>Processing:</strong> Orders ship after payment clears and any required verification is completed.</p>
<p><strong>Address rules:</strong> We ship to the verified billing/name match when applicable.</p>
<p className="small">Replace this text with your final policy drafted with your lawyer/insurer requirements.</p>
      </div>
    </div>
  )
}
