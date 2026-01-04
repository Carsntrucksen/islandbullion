import site from "@/data/site.json";

export default function LiveSales(){
  return (
    <div className="card">
      <h1 className="h1" style={{fontSize:32}}>Live Sales</h1>
      <p className="muted">
        We run live drops and auctions. Follow us to get notified and claim deals in real time.
      </p>
      <div className="grid2" style={{marginTop:14}}>
        <div className="card">
          <div className="h2">Facebook Live</div>
          <div className="muted small">Paste your page or live event embed here.</div>
          <div className="kv"><span>{site.facebookLiveUrl}</span></div>
        </div>
        <div className="card">
          <div className="h2">Whatnot</div>
          <div className="muted small">Paste your Whatnot shop/show link here.</div>
          <div className="kv"><span>{site.whatnotUrl}</span></div>
        </div>
      </div>
    </div>
  )
}
