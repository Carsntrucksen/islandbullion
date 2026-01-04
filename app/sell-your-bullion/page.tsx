"use client";

import { useMemo, useState } from "react";
import site from "@/data/site.json";

function makeRef() {
  const a = Math.random().toString(36).slice(2, 6).toUpperCase();
  const b = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `IB-${a}${b}`;
}

export default function SellYourBullion() {
  const [ref, setRef] = useState<string>(() => makeRef());
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [metal, setMetal] = useState<"silver" | "gold" | "both">("both");
  const [items, setItems] = useState("");
  const [howSoon, setHowSoon] = useState<"today" | "this-week" | "this-month">("this-week");
  const [payout, setPayout] = useState<"e-transfer" | "bank-wire">("e-transfer");
  const [files, setFiles] = useState<File[]>([]);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Sell Your Bullion Request (${ref})`);
    const body = encodeURIComponent(
`Hi Island Bullion,

I'd like a quote to sell bullion.

Reference: ${ref}

Name: ${name}
Email: ${email}
Phone: ${phone}
City/Province: ${city}

Metal: ${metal}
Timing: ${howSoon}
Preferred payout: ${payout}

Items (description + quantity):
${items}

Photos:
If you selected photos on the form, please reply to this email and attach them, or email photos separately with the reference "${ref}" in the subject.

Thanks!
`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [ref, name, email, phone, city, metal, howSoon, payout, items]);

  return (
    <div>
      <div className="card">
        <h1 className="h1" style={{ fontSize: 32 }}>Sell Your Bullion</h1>
        <p className="muted">
          Submit what you have (description + quantity) and we’ll reply with a quote and next steps.
        </p>
        <div className="kv">
          <span>Reference: <strong>{ref}</strong></span>
          <span>Response: typically within 1 business day</span>
          <span>We may request verification for anti-fraud & compliance</span>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="grid2">
          <div>
            <div className="muted small">Your details</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <input className="btn" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="btn" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="btn" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input className="btn" placeholder="City, Province" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>

            <div className="muted small" style={{ marginTop: 14 }}>What are you selling?</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <select className="btn" value={metal} onChange={(e) => setMetal(e.target.value as any)}>
                <option value="both">Gold & Silver</option>
                <option value="gold">Gold only</option>
                <option value="silver">Silver only</option>
              </select>

              <textarea
                className="btn"
                style={{ width: "100%", minHeight: 140 }}
                placeholder={"List each item like this:\n- 1 oz Silver Maple Leaf (2016) x 20\n- 10 oz Silver bar (RCM) x 2\n- 1 oz Gold Maple Leaf (2024) x 1\n\nInclude condition if applicable."}
                value={items}
                onChange={(e) => setItems(e.target.value)}
              />
            </div>
          </div>

          <div>
            <div className="muted small">Preferences</div>
            <div style={{ display: "grid", gap: 10, marginTop: 10 }}>
              <select className="btn" value={howSoon} onChange={(e) => setHowSoon(e.target.value as any)}>
                <option value="today">Today</option>
                <option value="this-week">This week</option>
                <option value="this-month">This month</option>
              </select>

              <select className="btn" value={payout} onChange={(e) => setPayout(e.target.value as any)}>
                <option value="e-transfer">E-Transfer</option>
                <option value="bank-wire">Bank wire</option>
              </select>
            </div>

            <div className="muted small" style={{ marginTop: 14 }}>Photos (optional)</div>
            <div className="card" style={{ marginTop: 10 }}>
              <div className="muted small">
                Uploading files directly requires a form backend. For now, choose photos here to keep track,
                then attach them when your email app opens (or email them separately with the reference).
              </div>
              <input
                className="btn"
                style={{ marginTop: 10 }}
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setFiles(Array.from(e.target.files || []))}
              />
              {files.length > 0 ? (
                <div className="muted small" style={{ marginTop: 10 }}>
                  Selected: {files.map(f => f.name).join(", ")}
                </div>
              ) : null}
              <div className="kv" style={{ marginTop: 10 }}>
                <span>Use subject: <strong>{ref}</strong></span>
                <span>Email photos to: <strong>{site.email}</strong></span>
              </div>
            </div>

            <div className="card" style={{ marginTop: 14 }}>
              <div className="h2">Submit</div>
              <p className="muted small">
                Clicking submit opens your email app with the details filled in. Add/attach photos before sending.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 10 }}>
                <a className="btn primary" href={mailto}>Submit for quote</a>
                <button className="btn" onClick={() => setRef(makeRef())}>New reference</button>
              </div>
              <p className="muted small" style={{ marginTop: 10 }}>
                Tip: For faster quotes, include clear photos of both sides and any assay cards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <div className="h2">What happens next?</div>
        <ol className="muted">
          <li>We review your list and photos and send a quote (buy price per item).</li>
          <li>If you accept, we confirm verification steps and shipping/drop-off options.</li>
          <li>After verification, we pay out via your selected method.</li>
        </ol>
        <p className="muted small">
          Final buy price depends on authenticity, condition, and live market premiums.
        </p>
      </div>
    </div>
  );
}
