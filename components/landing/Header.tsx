'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Popover, PopoverBackdrop, PopoverButton, PopoverPanel } from '@headlessui/react';
import clsx from 'clsx';
import Image from 'next/image';
import logo from '../../public/convofreaks.jpg';
import { Button } from './Button';
import { NavLink } from './NavLink';
import { getUserFromToken } from '../../lib/auth';

interface HeaderProps {
    isLoggedIn: boolean;
}

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <PopoverButton as={ Link } href={ href } className="block w-full p-2">
            { children }
        </PopoverButton>
    );
};

const MobileNavIcon = ({ open }: { open: boolean }) => {
    return (
        <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
            fill="none"
            strokeWidth={ 2 }
            strokeLinecap="round"
        >
            <path
                d="M0 1H14M0 7H14M0 13H14"
                className={ clsx(
                    'origin-center transition',
                    open && 'scale-90 opacity-0',
                ) }
            />
            <path
                d="M2 2L12 12M12 2L2 12"
                className={ clsx(
                    'origin-center transition',
                    !open && 'scale-90 opacity-0',
                ) }
            />
        </svg>
    );
};

const MobileNavigation = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return (
        <Popover>
            <PopoverButton
                className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
                aria-label="Toggle Navigation"
            >
                { ({ open }) => <MobileNavIcon open={ open }/> }
            </PopoverButton>
            <PopoverBackdrop
                transition
                className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
            />
            <PopoverPanel
                transition
                className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
            >
                { isLoggedIn ? (
                    <>
                        <MobileNavLink href="/profile">Profile</MobileNavLink>
                        <MobileNavLink href="/account">My account</MobileNavLink>
                        <MobileNavLink href="/logout">Logout</MobileNavLink>
                    </>
                ) : (
                    <MobileNavLink href="/login">Sign in</MobileNavLink>
                ) }
            </PopoverPanel>
        </Popover>
    );
};

const Header = ({ isLoggedIn }: HeaderProps) => {
    const [user, setUser] = useState<null | { id: string; email: string; username: string }>(null);
    const router = useRouter();

    useEffect(() => {
        if (isLoggedIn) {
            const user = getUserFromToken();
            setUser(user);
        }
    }, [isLoggedIn]);

    const handleSignOut = () => {
        localStorage.removeItem('token');
        router.push('/');
    };

    const getInitial = (email: string) => {
        return email?.charAt(0)?.toUpperCase();
    };

    return (
        <header>
            <nav className="relative z-50 flex justify-between shadow-lg px-6 py-2">
                <div className="flex items-center md:gap-x-12">
                    <Link href="/" aria-label="Home">
                        <Image src={ logo } alt="Logo" width={ 180 } height={ 200 }/>
                    </Link>
                    <div className="hidden md:flex md:gap-x-6">
                        {/* Add NavLinks here if needed */ }
                    </div>
                </div>
                <div className="flex items-center gap-x-5 md:gap-x-8">
                    { isLoggedIn ? (
                        <>
                            { user && (
                                <div className="relative">
                                    <button onClick={ handleSignOut } className="focus:outline-none">
                                        <div
                                            className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500 text-white text-lg font-semibold">
                                            { getInitial(user.email) }
                                        </div>
                                    </button>
                                </div>
                            ) }
                        </>
                    ) : (
                        <>
                            <div className="hidden md:block">
                                <NavLink href="/login">Sign in</NavLink>
                            </div>
                            <Button href="/register" color="blue">
                                    <span>
                                        Get started <span className="hidden lg:inline">today</span>
                                    </span>
                            </Button>
                        </>
                    ) }
                    <div className="-mr-1 md:hidden">
                        <MobileNavigation isLoggedIn={ isLoggedIn }/>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
