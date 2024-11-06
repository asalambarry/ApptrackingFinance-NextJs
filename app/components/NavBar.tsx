"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UserButton from "./UserButton";

// Interface pour les liens de navigation
interface NavLink {
    href: string;
    label: string;
    icon: JSX.Element;
}

// Configuration des liens de navigation
const navLinks: NavLink[] = [
    {
        href: "/budgets",
        label: "Budgets",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18M3 12h18M3 18h18" />
            </svg>
        ),
    },
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        href: "/transactions",
        label: "Transactions",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

const NavLinks = ({ isMobile = false }) => {
    const pathname = usePathname();

    return (
        <>
            {navLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`
            btn ${isMobile ? 'btn-ghost btn-sm flex-col gap-1 flex-1 h-16' : 'btn-ghost btn-sm'}
            hover:bg-primary/10 hover:text-primary transition-all duration-300
            group relative overflow-hidden
            ${pathname === link.href ? 'bg-primary/10 text-primary' : ''}
          `}
                >
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 rounded-lg"></div>
                    <div className={`
            ${isMobile ? 'scale-100' : 'group-hover:scale-110'}
            transition-transform duration-300
          `}>
                        {link.icon}
                    </div>
                    <span className={`
            ${isMobile ? "text-xs" : ""}
            group-hover:text-primary transition-colors duration-300
            ${pathname === link.href ? 'font-medium' : ''}
          `}>
                        {link.label}
                    </span>
                    {!isMobile && pathname === link.href && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transform origin-left"></div>
                    )}
                </Link>
            ))}
        </>
    );
};

const Logo = () => (
    <Link
        href="/"
        className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group"
    >
        <div className="avatar">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20
        flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20
        transition-all duration-300 animate-gradient">
                <span className="text-2xl font-bold text-base-100 group-hover:scale-110 transition-transform">
                    B
                </span>
            </div>
        </div>
        <div className="hidden sm:flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text">
                Budget<span className="text-primary font-extrabold">App</span>
            </span>
            <span className="text-xs text-base-content/60">Gérez vos finances</span>
        </div>
    </Link>
);

export default function Navbar() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isLoaded, isSignedIn, user } = useUser();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isLoaded) {
        return (
            <div className="navbar bg-base-100/50 backdrop-blur-sm shadow-sm">
                <div className="flex justify-between items-center w-full px-4">
                    <Logo />
                    <div className="flex items-center gap-2">
                        <span className="loading loading-spinner loading-md text-primary"></span>
                        <span className="text-sm text-base-content/60">Chargement...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className={`
        navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50
        transition-all duration-500 px-4 lg:px-8
        ${isScrolled ? 'shadow-lg shadow-base-content/5' : ''}
      `}>
                <div className="navbar-start">
                    <Logo />
                </div>

                {isSignedIn ? (
                    <>
                        <div className="navbar-center hidden md:flex gap-1">
                            <NavLinks />
                        </div>

                        <div className="navbar-end gap-2">
                            {/* Notifications */}
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle btn-sm">
                                    <div className="indicator">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>
                                        <span className="badge badge-xs badge-primary indicator-item"></span>
                                    </div>
                                </label>
                                <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-64 p-2 shadow-lg bg-base-100 text-base-content">
                                    <div className="card-body">
                                        <h3 className="font-bold text-lg">Notifications</h3>
                                        <p className="text-base-content/60">Pas de nouvelles notifications</p>
                                    </div>
                                </div>
                            </div>

                            {/* Menu mobile */}
                            <div className="dropdown dropdown-end md:hidden">
                                <label tabIndex={0}
                                    className="btn btn-ghost btn-circle btn-sm hover:bg-primary/10"
                                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        className={`h-5 w-5 transition-transform duration-300 ${showMobileMenu ? 'rotate-90' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                    </svg>
                                </label>
                                <ul tabIndex={0} className={`
                  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl
                  bg-base-100 rounded-box w-52 border border-base-200
                  ${showMobileMenu ? 'animate-fade-in' : ''}
                `}>
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            <Link href={link.href} className="flex gap-2 hover:text-primary p-3">
                                                {link.icon}
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <UserButton />
                        </div>

                        {/* Navigation mobile bottom */}
                        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-base-100/95 backdrop-blur-md
              border-t border-base-200 px-2 py-1 flex justify-around items-center z-50
              shadow-lg shadow-base-content/5">
                            <NavLinks isMobile={true} />
                        </div>
                    </>
                ) : (
                    <div className="navbar-end gap-2">
                        <Link
                            href="/sign-in"
                            className="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary transition-all duration-300"
                        >
                            Se connecter
                        </Link>
                        <Link
                            href="/sign-up"
                            className="btn btn-primary btn-sm hover:brightness-105 hover:shadow-md hover:shadow-primary/20
                transition-all duration-300"
                        >
                            S&apos;inscrire
                        </Link>
                    </div>
                )}
            </div>

            <div className="h-16"></div>
            {isSignedIn && <div className="h-16 md:h-0"></div>}
        </>
    );
}