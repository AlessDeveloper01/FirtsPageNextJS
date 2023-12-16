import Link from "next/link";
import { ContainerIcon } from "@primer/octicons-react";
import { ActiveLink } from "@/components"

const navItems = [
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
]

export const Navbar = () => {
    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
            <Link href="/" className="flex items-center">
                <ContainerIcon className="mr-2" size={16} />
                <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {navItems.map(navItem => (
                <ActiveLink
                    key={navItem.path}
                    path={navItem.path}
                    text={navItem.text}
                />
            )) }
        </nav>
    );
};
