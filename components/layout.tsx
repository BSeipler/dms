import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <SidebarNav>
        <main>{children}</main>
      </SidebarNav>
    </>
  );
}
