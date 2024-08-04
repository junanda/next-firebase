import React from "react";
import Navbar from "../Navbar"
import { useRouter } from "next/router";

type AppShellProps = {
    children: React.ReactNode;
}

const disableNavbar = ["/auth/register", "/auth/login", "/404"]

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <main className="h-full">
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    )
}

export default AppShell;