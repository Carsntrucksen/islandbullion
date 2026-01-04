/**
 * Spot price stub.
 * Replace this with a server-side fetch from your preferred data source.
 * Keep API keys on the server (process.env), never in the client.
 */
export async function getSpotCadPerOz(): Promise<number> {
  // TODO: Wire to live feed.
  // For now, return a placeholder.
  return 32.0;
}
