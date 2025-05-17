import Link from 'next/link';
export default function NavBar() {
    return (
        <div className="flex flex-row text-3xl space-x-5 p-2 m-2">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
    );
}
