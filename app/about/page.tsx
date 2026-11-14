import { Cpu, Eye, Heart, ShieldCheck } from "lucide-react"
import { PageFrame } from "@/components/site-page"

export default function AboutPage() {
  return <PageFrame eyebrow="About NetPulse" title={<>Useful by design.<br /><em>Quiet by default.</em></>} intro="NetPulse is a focused Windows utility from Jatayu Technology, built for people who want a clear read on their connection without the clutter of a full network suite.">
    <div className="about-grid"><div className="about-lede"><p>We believe the best desktop tools do one thing exceptionally well. NetPulse keeps a small, always-available view of your network speed and — when you choose — the health of your route to a known DNS server.</p><p>It runs locally, uses native Windows APIs, and stays lightweight enough to leave on all day. No account, dashboard, or cloud service required.</p></div><div className="values-list"><div><Cpu size={19} /><span><strong>Native at heart</strong>Built for Windows with a small, efficient footprint.</span></div><div><Eye size={19} /><span><strong>Clarity over clutter</strong>Only the metrics you need, always within reach.</span></div><div><Heart size={19} /><span><strong>Made with care</strong>Open source, transparent, and shaped by real desktop use.</span></div><div><ShieldCheck size={19} /><span><strong>Private by default</strong>Your connection telemetry never becomes our data.</span></div></div></div>
    <div className="about-quote">“A good utility should feel less like another app and more like a reliable part of your workspace.”</div>
  </PageFrame>
}
