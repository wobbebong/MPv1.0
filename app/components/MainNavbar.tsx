import type React from "react"
import Link from "next/link"
import Logo from "./Logo"
import MobileNav from "./MobileNav"

interface NavItem {
  href: string
  label: string
  isActive?: boolean
}

interface MainNavbarProps {
  activeRoute?: string
  additionalItems?: React.ReactNode
}

export default function MainNavbar({ activeRoute, additionalItems }: MainNavbarProps) {
  const navItems: NavItem[] = [
    {
      href: "/",
      label: "Ana Sayfa",
      isActive: activeRoute === "/",
    },
    {
      href: "/feed",
      label: "Analizler",
      isActive: activeRoute === "/feed",
    },
    {
      href: "/chart-analysis",
      label: "Kendi Analizini Yap",
      isActive: activeRoute === "/chart-analysis",
    },
    {
      href: "/pricing",
      label: "Servisler",
      isActive: activeRoute === "/pricing",
    },
    {
      href: "/vip-info",
      label: "VIP Sinyal Bilgi",
      isActive: activeRoute === "/vip-info",
    },
  ]

  return (
    <header className="bg-cyber-black border-b border-cyber-blue sticky top-0 z-50">
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNav activeRoute={activeRoute} />
      </div>

      {/* Desktop Navigation */}
      <nav className="container mx-auto px-4 py-4 hidden md:flex justify-between items-center">
        <Logo />
        <div className="flex items-center">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    item.isActive ? "text-cyber-pink" : "text-cyber-yellow hover:text-cyber-pink"
                  } transition-colors duration-300 relative group`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 ${
                      item.isActive ? "w-full" : "w-0"
                    } h-0.5 bg-cyber-pink transition-all ${!item.isActive && "group-hover:w-full"}`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
          {additionalItems}
        </div>
      </nav>
    </header>
  )
}

