"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "~/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { items, user, topProduct } from "~/lib/app-sidebar";
import { NavHome } from "./nav-home";
import { NavPlatform } from "./nav-platform";
import { NavTopProduct } from "./nav-top-product";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <NavHome />
      </SidebarHeader>
      <SidebarContent>
        <NavPlatform items={items} />
        <NavTopProduct topProduct={topProduct} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
