import { ArrowLeft, ArrowRight, GitBranch, ShieldCheck } from "lucide-react"
import Link from "next/link"

export function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Net<span className="brand-accent">Pulse</span></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href="/#features">Features</Link><Link href="/#how-it-works">How it works</Link><Link href="/about">About</Link><Link href="/privacy">Privacy</Link></nav><a className="header-link" href="https://github.com/Jatayu-Technology/Net-Pulse" target="_blank" rel="noreferrer">View on GitHub <ArrowRight size={15} /></a></header>
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="section-shell footer-inner"><Link className="brand" href="/"><span className="brand-mark"><span /><span /><span /></span><span>Net<span className="brand-accent">Pulse</span></span></Link><span className="footer-copy">A focused network overlay for Windows.</span><div className="footer-links"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><a href="https://github.com/Jatayu-Technology/Net-Pulse" target="_blank" rel="noreferrer"><GitBranch size={16} /></a></div></div></footer>
}

export function PageFrame({ eyebrow, title, intro, children }: { eyebrow: string; title: React.ReactNode; intro: string; children: React.ReactNode }) {
  return <><SiteHeader /><main className="subpage"><div className="section-shell subpage-hero"><Link className="back-link" href="/"><ArrowLeft size={15} /> Back to home</Link><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{intro}</p></div><div className="section-shell subpage-content">{children}</div></main><SiteFooter /></>
}

export function PrivacyNote() {
  return <div className="privacy-note"><ShieldCheck size={20} /><div><strong>Zero personal data.</strong><span>NetPulse collects, stores, and transmits none.</span></div></div>
}
