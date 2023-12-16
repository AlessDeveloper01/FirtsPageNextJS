import { Navbar } from "@/components"

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <span>About Layout</span>
            {children}
        </>
    )
}