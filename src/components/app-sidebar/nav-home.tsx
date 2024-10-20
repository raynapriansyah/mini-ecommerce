import * as React from "react";
import { Store } from "lucide-react";

import { SidebarMenu, SidebarMenuButton } from "~/components/ui/sidebar";
import Link from "next/link";

export function NavHome() {
  return (
    <SidebarMenu>
      <Link href="/">
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-blue-500 text-sidebar-primary-foreground">
            <Store size={24} />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">
              <h1>Mini E-commerce</h1>
            </span>
            <span className="truncate text-xs">
              <h1>Happy Shopping</h1>
            </span>
          </div>
        </SidebarMenuButton>
      </Link>
    </SidebarMenu>
  );
}
