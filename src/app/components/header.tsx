import Image from "next/image";
import Link from "next/link";
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <nav className="flex items-center justify-between px-4 md:px-10 bg-[#FFFFFF] text-[#000000] py-3">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <Image src={"/furniture logo.png"} width={50} height={30} alt="logo" />
                <h1 className="font-bold text-2xl md:text-4xl">Funiro</h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 font-bold">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/shop">Shop</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

            {/* Icons Section */}
            <div className="flex items-center gap-4 md:gap-8 text-2xl">
                <MdOutlinePersonOutline />
                <CiSearch />
                <CiHeart />
                <MdOutlineShoppingCart />
            </div>

            {/* Mobile Hamburger Menu */}
            <Sheet>
                <SheetTrigger className="md:hidden">
                    <Menu className="text-3xl" />
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-950 text-white p-6">
                    <SheetHeader>
                        <SheetTitle>Menu</SheetTitle>
                        <SheetDescription>
                            <ul className="mt-6 space-y-6 text-3xl font-semibold text-white">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/shop">Shop</Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}



Header();