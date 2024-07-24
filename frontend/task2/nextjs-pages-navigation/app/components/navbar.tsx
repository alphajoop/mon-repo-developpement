"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/profile", label: "Profile" },
  { href: "/analytics", label: "Analytics" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link className={`link ${pathname === item.href ? 'active' : ''}`} href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
