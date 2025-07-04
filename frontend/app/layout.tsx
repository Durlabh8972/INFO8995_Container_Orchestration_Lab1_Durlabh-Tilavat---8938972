import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Task Management Application",
  description: "A simple Todo application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
