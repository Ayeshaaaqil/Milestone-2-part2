
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-700 text-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link href="/">AYESHA AAQIL</Link>
                </div>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-6">
                        <li className="hover:text-blue-300 transition duration-300">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="hover:text-blue-300 transition duration-300">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="hover:text-blue-300 transition duration-300">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
