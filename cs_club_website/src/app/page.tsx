import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col my-auto">
      <div className="bg-black rounded-sm mx-auto p-4 my-auto">
        <h1 className="text-center mx-auto text-7xl font-black m-8 bg-black rounded-sm p-8">
          We are the{' '}
          <span className="text-emerald-400">Allen Computer Science Forum</span>
        </h1>
        <h2 className="text-center mx-auto text-3xl italic font-black m-2 bg-black rounded-sm p-4">
          More than a decade old
        </h2>
      </div>
      <div className="ml-auto mr-60 bg-black rounded-sm mt-8 p-4">
        <h2 className="text-center mx-auto p-4 bg-black rounded-sm text-5xl">
          How do I join?
        </h2>
        <div className="flex flex-col space-y-4">
          <div className="mt-4 p-4">
            Check out our discord{' '}
            <Link
              className="text-cyan-500"
              href="https://discord.gg/yfTPTMMfsm"
            >
              here
            </Link>
            !
          </div>
          <div className="mr-auto p-4">
            Also see our calendar at{' '}
            <Link className="text-emerald-400" href="/calendar">
              our calendar page
            </Link>
            , and attend one of our meetings!
          </div>
        </div>
      </div>
      <div className="mr-auto ml-60 bg-black rounded-sm mt-4 p-4">
        <h2 className="text-center mx-auto p-4 bg-black rounded-sm text-5xl">
          Do I need to be good?
        </h2>
        <div className="flex flex-col space-y-4 p-4">
          <div className="mt-4 p-4">You can be at any skill level!</div>
          <div className="p-4">
            Even if you're not interested in CS, it's a great place to network
            and make friends.
          </div>
        </div>
      </div>
    </div>
  );
}
