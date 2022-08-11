import { ReactNode } from "react";
import SidebarNav from "./SidebarNav";

type Props = {
  children?: ReactNode;
  active: string;
};

export default function Layout({ children, active }: Props) {
  return (
    <>
      <SidebarNav active={active}>
        <main>{children}</main>
      </SidebarNav>
    </>
  );
}
