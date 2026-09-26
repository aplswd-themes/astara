import { useState } from 'react';

const SNIPPETS = {
  typescript: {
    lang: 'TypeScript',
    filename: 'edge-handler.ts',
    code: `import { createEdgeHandler } from '@nexacloud/runtime';

export default createEdgeHandler({
  region: 'global-auto',
  cache: { maxAge: 3600, staleWhileRevalidate: 86400 },
  async handle(req, { geo, ai }) {
    // Instant zero-cold-start isolate execution
    const userCountry = geo.country || 'US';
    const smartPayload = await ai.embed(req.body);
    
    return Response.json({
      status: 'routed-at-edge',
      latencyMs: geo.latency,
      node: geo.nearestMetro,
      processed: smartPayload.length
    });
  }
});`,
  },
  rust: {
    lang: 'Rust',
    filename: 'lib.rs',
    code: `use nexacloud_edge::{Request, Response, EdgeContext};

#[nexacloud::edge_function]
pub async fn handle(req: Request, ctx: EdgeContext) -> Response {
    let edge_metro = ctx.geo.nearest_metro();
    let duration = ctx.latency_metrics();

    Response::ok()
        .header("X-Edge-Region", edge_metro)
        .header("X-Cold-Start-Ns", "0")
        .json(&serde_json::json!({
            "fast_path": true,
            "region": edge_metro,
            "micros": duration.as_micros()
        }))
}`,
  },
  python: {
    lang: 'Python',
    filename: 'main.py',
    code: `from nexacloud import EdgeApp, Request, JSONResponse

app = EdgeApp(runtime="edge-isolate-v2")

@app.route("/api/v1/stream")
async def stream_handler(request: Request):
    nearest_datacenter = request.geo.metro
    
    return JSONResponse({
        "status": "edge-accelerated",
        "datacenter": nearest_datacenter,
        "cold_start": "0.4ms",
        "cache_hit_ratio": "99.4%"
    })`,
  },
  go: {
    lang: 'Go',
    filename: 'handler.go',
    code: `package main

import (
    "github.com/nexacloud/edge/v2"
    "net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    ctx := edge.FromContext(r.Context())
    
    edge.RespondJSON(w, http.StatusOK, map[string]any{
        "status":  "edge-deployed",
        "region":  ctx.MetroCode(),
        "latency": ctx.LatencyMs(),
    })
}`,
  },
};

type LangKey = keyof typeof SNIPPETS;

export function LiveCodeTerminal() {
  const [activeLang, setActiveLang] = useState<LangKey>('typescript');
  const [copied, setCopied] = useState(false);

  const current = SNIPPETS[activeLang];

  const handleCopy = () => {
    navigator.clipboard.writeText(current.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full my-12 rounded-xl border border-zinc-200 bg-white shadow-lg overflow-hidden relative">
      {/* Top Bar with Language Tabs & Window Controls */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-zinc-100 bg-zinc-50 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
          <span className="text-xs font-mono text-zinc-500 ml-2 hidden sm:inline">
            {current.filename}
          </span>
        </div>

        {/* Language Tabs */}
        <div className="flex items-center gap-1 p-0.5 rounded-md bg-zinc-100 border border-zinc-200">
          {(Object.keys(SNIPPETS) as LangKey[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all ${
                activeLang === lang
                  ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200'
                  : 'text-zinc-500 hover:text-zinc-700'
              }`}
            >
              {SNIPPETS[lang].lang}
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 text-xs font-medium transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-emerald-600">Copied!</span>
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>

      {/* Code Display Area & Network Status */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        <div className="lg:col-span-8 p-6 bg-zinc-950 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed border-b lg:border-b-0 lg:border-r border-zinc-200">
          <pre>
            <code>{current.code}</code>
          </pre>
        </div>

        {/* Network Status Sidebar */}
        <div className="lg:col-span-4 p-6 bg-zinc-50 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-zinc-700">
                Network Latency
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active
              </span>
            </div>

            <div className="space-y-2">
              {[
                { city: 'Tokyo (NRT)', latency: '14ms', status: 'Optimal', color: '#10b981' },
                { city: 'Frankfurt (FRA)', latency: '18ms', status: 'Optimal', color: '#10b981' },
                { city: 'San Francisco (SFO)', latency: '9ms', status: 'Optimal', color: '#10b981' },
                { city: 'Singapore (SIN)', latency: '21ms', status: 'Optimal', color: '#10b981' },
                { city: 'São Paulo (GRU)', latency: '34ms', status: 'Normal', color: '#38bdf8' },
              ].map((node) => (
                <div
                  key={node.city}
                  className="flex items-center justify-between p-2.5 rounded-md bg-white border border-zinc-100 text-xs shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: node.color }} />
                    <span className="text-zinc-700 font-medium">{node.city}</span>
                  </div>
                  <span className="font-mono text-xs font-semibold text-zinc-900">{node.latency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 rounded-md bg-zinc-100 border border-zinc-200 text-xs text-zinc-600">
            <span className="font-medium text-zinc-900 block mb-0.5">Deployment Status</span>
            Code pushes propagate globally in under 4 seconds.
          </div>
        </div>
      </div>
    </div>
  );
}
