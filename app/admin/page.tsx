"use client";

import { useEffect, useMemo, useState } from "react";
import defaultProducts from "@/data/products.json";

type Product = {
  id: string;
  name: string;
  type: "coin" | "bar";
  metal: "silver" | "gold" | "platinum";
  weightOz: number;
  purity: string;
  brand: string;
  sku: string;
  premiumCad: number;
  description: string;
  images: string[];
};

function download(filename: string, text: string) {
  const element = document.createElement("a");
  element.setAttribute("href", "data:application/json;charset=utf-8," + encodeURIComponent(text));
  element.setAttribute("download", filename);
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

export default function Admin(){
  const [products, setProducts] = useState<Product[]>(() => {
    if (typeof window === "undefined") return defaultProducts as any;
    const saved = localStorage.getItem("ib_products");
    return saved ? JSON.parse(saved) : (defaultProducts as any);
  });

  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("ib_products", JSON.stringify(products, null, 2));
  }, [products]);

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if(!q) return products;
    return products.filter(p =>
      [p.name, p.sku, p.brand, p.type, p.metal].some(v => String(v).toLowerCase().includes(q))
    );
  }, [products, filter]);

  function addNew(){
    const id = `new-${Date.now()}`;
    setProducts([{ id, name:"New Product", type:"bar", metal:"silver", weightOz:1, purity:"999+", brand:"Assorted", sku:"", premiumCad:0, description:"", images:[] }, ...products]);
  }

  function update(idx: number, patch: Partial<Product>){
    const next = [...products];
    next[idx] = { ...next[idx], ...patch };
    setProducts(next);
  }

  function remove(idx: number){
    const next = [...products];
    next.splice(idx, 1);
    setProducts(next);
  }

  function exportJson(){
    download("products.json", JSON.stringify(products, null, 2));
  }

  function resetToDefault(){
    if(!confirm("Reset products to the default starter list?")) return;
    setProducts(defaultProducts as any);
  }

  function importJson(file: File){
    const reader = new FileReader();
    reader.onload = () => {
      try{
        const parsed = JSON.parse(String(reader.result));
        if(!Array.isArray(parsed)) throw new Error("JSON must be an array of products.");
        setProducts(parsed);
      }catch(e:any){
        alert(e.message || "Invalid JSON");
      }
    };
    reader.readAsText(file);
  }

  return (
    <div>
      <div className="card">
        <h1 className="h1" style={{fontSize:32}}>Admin • Product List</h1>
        <p className="muted">
          Edit your catalog in the browser. Changes are saved to this device (localStorage).
          Use <strong>Export</strong> to download <code>products.json</code>, then replace the file in your project at <code>data/products.json</code> and redeploy.
        </p>

        <div style={{display:"flex", gap:10, flexWrap:"wrap", marginTop:12}}>
          <button className="btn primary" onClick={addNew}>Add product</button>
          <button className="btn" onClick={exportJson}>Export products.json</button>
          <label className="btn" style={{cursor:"pointer"}}>
            Import JSON
            <input type="file" accept="application/json" style={{display:"none"}} onChange={(e)=> {
              const f = e.target.files?.[0];
              if(f) importJson(f);
              e.currentTarget.value = "";
            }} />
          </label>
          <button className="btn" onClick={resetToDefault}>Reset</button>
          <input
            className="btn"
            style={{minWidth:220}}
            placeholder="Search products…"
            value={filter}
            onChange={(e)=>setFilter(e.target.value)}
          />
        </div>
      </div>

      <div style={{marginTop:14}} className="card">
        <table className="table">
          <thead>
            <tr>
              <th style={{width:"22%"}}>Name</th>
              <th>SKU</th>
              <th>Type</th>
              <th>Metal</th>
              <th>Oz</th>
              <th>Premium (CAD)</th>
              <th style={{width:"30%"}}>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => {
              const idx = products.findIndex(x => x.id === p.id);
              return (
                <tr key={p.id}>
                  <td>
                    <input className="btn" value={p.name} onChange={(e)=>update(idx,{name:e.target.value})} />
                    <div className="muted small">ID: {p.id}</div>
                  </td>
                  <td><input className="btn" value={p.sku} onChange={(e)=>update(idx,{sku:e.target.value})} /></td>
                  <td>
                    <select className="btn" value={p.type} onChange={(e)=>update(idx,{type:e.target.value as any})}>
                      <option value="bar">bar</option>
                      <option value="coin">coin</option>
                    </select>
                  </td>
                  <td>
                    <select className="btn" value={p.metal} onChange={(e)=>update(idx,{metal:e.target.value as any})}>
                      <option value="silver">silver</option>
                      <option value="gold">gold</option>
                      <option value="platinum">platinum</option>
                    </select>
                  </td>
                  <td><input className="btn" type="number" value={p.weightOz} onChange={(e)=>update(idx,{weightOz:Number(e.target.value)})} /></td>
                  <td><input className="btn" type="number" step="0.01" value={p.premiumCad} onChange={(e)=>update(idx,{premiumCad:Number(e.target.value)})} /></td>
                  <td><textarea className="btn" style={{width:"100%", minHeight:44}} value={p.description} onChange={(e)=>update(idx,{description:e.target.value})} /></td>
                  <td><button className="btn" onClick={()=>remove(idx)}>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="muted small" style={{marginTop:10}}>
          Tip: keep premiums as a CAD amount per item (spot + premium pricing). Add images later by putting files in <code>/public</code> and listing paths in <code>images</code>.
        </div>
      </div>
    </div>
  )
}
