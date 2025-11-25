import Link from 'next/link';
import { FaAngleDown } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';

export default function NavBar() {
  return (
    <div
      className="flex flex-row items-center justify-center
     text-3xl space-x-8 dark:bg-zinc-950 bg-gray-200 dark:text-white
      text-black m-0 p-4 rounded-sm backdrop-blur-sm bg-opacity-30"
    >
      {/* Desktop Navbar */}
      <div className="hidden md:visible md:flex flex-row items-center gap-8">
        <Link className="hover:text-teal-300 transition" href="/">
          Home
        </Link>
        <Link className="hover:text-teal-300 transition" href="/about">
          About
        </Link>
        <div className="dropdown dropdown-start my-auto z-50">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer hover:text-teal-300 transition m-1 align-middle my-auto flex flex-row font-lato self-center"
          >
            Subforums <FaAngleDown className="my-auto mx-2" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 mt-2 shadow-sm"
          >
            <li>
              <Link href="/subforms/cyber">Cybersecurity Club</Link>
            </li>
            <li>
              <Link href="/subforms/dataScience">Data Science Club</Link>
            </li>
            <li>
              <Link href="/subforms/renew">Project Renew</Link>
            </li>
          </ul>
        </div>
        <Link className="hover:text-teal-300 transition" href="/calendar">
          Calendar
        </Link>
      </div>

      {/* Mobile Navbar */}
      <ul
        className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
        popover="auto"
        id="popover-1"
        style={{ positionAnchor: '--anchor-1' } as React.CSSProperties}
      >
        wtf{' '}
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>

      <div className="ml-auto px-4 p-2 bg-[#5865F2] flex flex-row rounded-xl items-center justify-center space-x-2">
        <Link
          className="self-center align-middle justify-center mt-1 visible max-sm:hidden"
          href="https://discord.gg/yfTPTMMfsm"
        >
          Discord
        </Link>
        <FaDiscord size={40} />
      </div>
    </div>
  );
}
