import { getSpotCadPerOz } from "@/lib/spot";

export default async function SpotWidget(){
  const spot = await getSpotCadPerOz();
  return (
    <div className="card">
      <div className="h2">Live Silver Spot (CAD/oz)</div>
      <div className="price">${spot.toFixed(2)}</div>
      <div className="muted small">Demo value. Wire this to a real price feed in lib/spot.ts</div>
    </div>
  )
}
