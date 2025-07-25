import Link from 'next/link';
export default function NavBar() {
  return (
    <div className="flex flex-row text-3xl space-x-5 dark:bg-emerald-950 bg-gray-200 m-0 mb-4 p-3">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
}
