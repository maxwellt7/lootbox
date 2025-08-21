"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-500">
            LOOTBOX
          </Link>

          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/" ? "text-red-500" : "text-gray-300 hover:text-red-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/product"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/product" ? "text-red-500" : "text-gray-300 hover:text-red-500"
              }`}
            >
              Join The Protocol
            </Link>
            <Link
              href="/protocol"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/protocol" ? "text-red-500" : "text-gray-300 hover:text-red-500"
              }`}
            >
              Protocol Page
            </Link>
            <Link
              href="/chat"
              className={`text-sm font-semibold transition-colors ${
                pathname === "/chat" ? "text-[#00A3FF]" : "text-gray-300 hover:text-[#00A3FF]"
              }`}
            >
              Chat with NOVA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
