import "./globals.css"
import Link from "next/link";
import Image from 'next/image';
export default function NotFound() {
    return (
        <div className="flex flex-col justify-center items-center h-screen text-center">
            <img className="h-60 w-60" src="/images/pagenotfound.png" alt="pagenotfound"/>
            <h1 className="text-2xl font-bold mt-4">404 - Page not Found</h1>
            <Link href="/" className="text-blue-600 hover:underline mt-2">Click here to Redirect to main Page</Link>
        </div>
    );
}
