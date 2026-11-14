import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NetPulse — Your connection, in plain sight.",
  description: "A lightweight, private network speed and latency overlay for Windows.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
