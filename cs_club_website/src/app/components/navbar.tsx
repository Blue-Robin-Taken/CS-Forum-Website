import Link from 'next/link';
export default function NavBar() {
  return (
    <div className="flex flex-row text-3xl space-x-5 dark:bg-zinc-950 bg-gray-200 dark:text-white text-black m-0 mb-4 p-4 rounded-sm backdrop-blur-sm bg-opacity-30">
      <Link className="hover:text-teal-300 transition" href="/">
        Home
      </Link>
      <Link className="hover:text-teal-300 transition" href="/about">
        About
      </Link>
      {/* <div className='dropdown dropdown-start'>
        <div tabIndex={0} ></div>
      </div> */}
    </div>
  );
}
