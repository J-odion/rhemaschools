import "@/app/globals.css"
import "@/app/print.css"
import { Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

// Update the Poppins font import to include lighter weights
const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata = {
  title: "RHEMA PRIMARY & SECONDARY SCHOOL SYSTEM",
  description: "Building a Brighter Future Together in Congo Town, Monrovia, Liberia",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
      </head>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
