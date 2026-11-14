import { ArrowRight, GitBranch, Mail } from "lucide-react"
import { PageFrame } from "@/components/site-page"

export default function ContactPage() {
  return <PageFrame eyebrow="Contact" title={<>Have a thought?<br /><em>We’re listening.</em></>} intro="Found a bug, have an idea, or want to say hello? The best place to reach the people behind NetPulse is GitHub.">
    <div className="contact-grid"><a className="contact-card" href="https://github.com/Jatayu-Technology/Net-Pulse/issues" target="_blank" rel="noreferrer"><span className="contact-icon"><GitBranch size={22} /></span><span><strong>Open an issue</strong><small>Report a bug or suggest an improvement</small></span><ArrowRight size={18} /></a><a className="contact-card" href="mailto:contact@jatayu.technology"><span className="contact-icon"><Mail size={22} /></span><span><strong>Send us an email</strong><small>For general questions and collaboration</small></span><ArrowRight size={18} /></a></div>
    <div className="contact-footnote">For support, please include your Windows version and a short description of what you expected to happen. Never include private network details or sensitive information.</div>
  </PageFrame>
}
