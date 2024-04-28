"use client";
import { HomeIcon, UserGroupIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
interface NavLinkType {
  name: string;
  href: string;
  icon: typeof HomeIcon
}

const links: NavLinkType[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: HomeIcon
  },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon
  },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: UserGroupIcon
  }
];

export default function NavLinks() {
  // 获取当前路由的路径
  const pathName = usePathname();

  return (
    <>
      {
        links.map(link => {
          const LinkIcon = link.icon;
          return (
            <Link key={link.name} href={link.href} className= {
              clsx(
                "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm text-[black] font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  'bg-sky-100 text-blue-600':pathName === link.href
                }
              )
            }>
              <LinkIcon className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          )
        })
      }
    </>
  )
}