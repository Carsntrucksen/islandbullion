export function retailPrice(spotCadPerOz: number, premiumCad: number, weightOz: number){
  const base = spotCadPerOz * weightOz;
  return Math.round((base + premiumCad) * 100) / 100;
}
