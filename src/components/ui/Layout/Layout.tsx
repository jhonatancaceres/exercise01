import type React from "react"
import LeftBar from "./LeftBar";
import TopBar from "./TopBar";
import type { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {

  return <>
    <div className="flex h-screen">
      <LeftBar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="p-4">
          {children}
        </main>
      </div>
    </div>
  </>
}

export default Layout;
