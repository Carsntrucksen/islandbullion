import site from "@/data/site.json";

export default function Contact(){
  return (
    <div className="card">
      <h1 className="h1" style={{fontSize:32}}>Contact</h1>
      <p className="muted">Quotes, invoices, and sourcing requests. We respond quickly during business hours.</p>
      <table className="table" style={{marginTop:12}}>
        <tbody>
          <tr><th>Email</th><td>{site.email}</td></tr>
          <tr><th>Phone</th><td>{site.phone}</td></tr>
          <tr><th>Location</th><td>{site.location}</td></tr>
        </tbody>
      </table>
      <div className="card" style={{marginTop:14}}>
        <div className="h2">Order process (recommended)</div>
        <ol className="muted">
          <li>Choose items in the Shop.</li>
          <li>Click “Request Invoice”.</li>
          <li>We confirm pricing/availability and send payment instructions.</li>
          <li>Once funds clear, we ship insured.</li>
        </ol>
      </div>
    </div>
  )
}
