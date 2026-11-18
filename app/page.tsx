import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpFromLine,
  GitBranch,
  Gauge,
  Layers3,
  MousePointer2,
  Palette,
  Radio,
  ShieldCheck,
  Sparkles,
  Wifi,
} from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Gauge,
    title: "Live network telemetry",
    text: "See download and upload throughput at a glance, refreshed on your chosen interval.",
  },
  {
    icon: Radio,
    title: "Optional latency checks",
    text: "Add ping and jitter to the overlay with a standard ICMP probe to your preferred DNS host.",
  },
  {
    icon: Palette,
    title: "Make it yours",
    text: "Choose from five tuned themes, four sizes, adjustable opacity, and bytes or bits.",
  },
  {
    icon: MousePointer2,
    title: "Out of your way",
    text: "Keep it always on top, click-through, compact, and tucked into the system tray.",
  },
]

const steps = [
  ["01", "Install once", "Launch NetPulse and it settles into a lightweight desktop overlay."],
  ["02", "Tune your view", "Pick a theme, scale, update rate, and the metrics you want to see."],
  ["03", "Stay in the know", "Keep a quiet, accurate read on your connection while you work or play."],
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>Net<span className="brand-accent">Pulse</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
        </nav>
        <a className="header-link" href="https://github.com/Jatayu-Technology/Net-Pulse" target="_blank" rel="noreferrer">
          View on GitHub <ArrowRight size={15} />
        </a>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> A quieter way to watch your network</div>
          <h1>Your connection,<br /><em>in plain sight.</em></h1>
          <p className="hero-lede">NetPulse is a tiny Windows overlay for the signal that matters. Real-time speed, optional latency, and zero noise — right where you need it.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://apps.microsoft.com/detail/9NHLCBG4RS24?hl=en-us&gl=IN&ocid=pdpshare" target="_blank" rel="noreferrer">Get NetPulse <ArrowRight size={17} /></a>
            <a className="text-link" href="#features">Explore features <ArrowRight size={15} /></a>
          </div>
          <div className="hero-note"><ShieldCheck size={16} /> No accounts. No tracking. No data leaves your PC.</div>
        </div>
        <div className="hero-visual" aria-label="NetPulse interface preview">
          <div className="visual-glow" />
          <div className="hud-window">
            <div className="hud-topline"><span className="hud-live"><span /> LIVE</span><span className="hud-dots">•••</span></div>
            <div className="hud-metrics">
              <div className="hud-metric"><ArrowDownToLine size={17} /><strong>184.6</strong><span>Mbps</span><div className="sparkline down"><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
              <div className="hud-divider" />
              <div className="hud-metric upload"><ArrowUpFromLine size={17} /><strong>42.8</strong><span>Mbps</span><div className="sparkline up"><i /><i /><i /><i /><i /><i /><i /><i /></div></div>
            </div>
            <div className="hud-ping"><span className="ping-status" /><span className="hud-label">PING</span><strong>18 ms</strong><span className="hud-label">JITTER</span><strong>2 ms</strong><span className="hud-host">1.1.1.1</span></div>
          </div>
          <div className="visual-caption"><span>NETPULSE / DESKTOP OVERLAY</span><span>LOCAL ONLY</span></div>
        </div>
      </section>

      <section className="signal-strip">
        <div className="section-shell strip-inner">
          <span>BUILT FOR THE MOMENTS BETWEEN</span>
          <div><span className="strip-item"><Wifi size={16} /> Work</span><span className="strip-item"><Layers3 size={16} /> Create</span><span className="strip-item"><Sparkles size={16} /> Play</span></div>
        </div>
      </section>

      <section className="section-shell feature-section" id="features">
        <div className="section-intro"><div><div className="eyebrow">01 / The essentials</div><h2>Small footprint.<br /><em>Clear signal.</em></h2></div><p>Everything you need to understand your connection in real time, without turning your desktop into a dashboard.</p></div>
        <div className="feature-grid">{features.map(({ icon: Icon, title, text }) => <article className="feature-card" key={title}><div className="feature-icon"><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><span className="card-number">0{features.indexOf(features.find((feature) => feature.title === title)!) + 1}</span></article>)}</div>
      </section>

      <section className="dark-panel" id="how-it-works">
        <div className="section-shell how-section">
          <div className="eyebrow light">02 / Set it and forget it</div>
          <div className="how-heading"><h2>Information that<br /><em>stays out of the way.</em></h2><p>Designed as a native Windows utility, NetPulse is fast, discreet, and built to become part of your desktop rhythm.</p></div>
          <div className="steps">{steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
        </div>
      </section>

      <section className="section-shell privacy-callout">
        <div className="privacy-badge"><ShieldCheck size={23} /></div>
        <div><div className="eyebrow">Private by design</div><h2>Your network data is yours.</h2><p>Bandwidth is read locally from Windows. Preferences stay in your local app data. Optional pings only go to the DNS server you choose.</p></div>
        <a className="text-link" href="/privacy">Read our privacy policy <ArrowRight size={15} /></a>
      </section>

      <section className="download-panel">
        <div className="section-shell download-inner"><div><div className="eyebrow light">03 / Ready when you are</div><h2>Make your connection<br /><em>visible.</em></h2></div><a className="button button-light" href="https://apps.microsoft.com/detail/9NHLCBG4RS24?hl=en-us&gl=IN&ocid=pdpshare" target="_blank" rel="noreferrer">Download for Windows <ArrowRight size={17} /></a></div>
      </section>

      <footer className="site-footer"><div className="section-shell footer-inner"><Link className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Net<span className="brand-accent">Pulse</span></span></Link><span className="footer-copy">A focused network overlay for Windows.</span><div className="footer-links"><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="https://github.com/Jatayu-Technology/Net-Pulse" target="_blank" rel="noreferrer"><GitBranch size={16} /></a></div></div></footer>
    </main>
  )
}
