import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"; // 👈 Add this import
export const metadata: Metadata = {
  title: 'Usha Jain',
  description: 'Created with v0',
  generator: 'v0.dev',
}



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> {/* 👈 Add this also */}
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem> {/* 👈 Wrap here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}