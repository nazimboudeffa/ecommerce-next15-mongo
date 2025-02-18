"use client"
import Link from "next/link"

function NavBar () {
    return (
        <header className="bg-neutral">

        <div className="mx-auto border-b px-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex h-16 items-center justify-between max-w-screen-xl">
                <div className="md:flex md:items-center md:gap-12">
                    <Link className="block text-primary" href="/">
                    <span className="sr-only">Home</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                    </Link>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                    <ul className="flex items-center gap-6 text-sm">
                        <li>
                        <Link className="underline"
                            href="/explore"
                        >
                            Explore
                        </Link>
                        </li>
                        <li>
                        <Link className="underline"
                            href="/pricing"
                        >
                            Pricing
                        </Link>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        </div>
        </header>
    )
}

export default NavBar