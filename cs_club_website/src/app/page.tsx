import Link from 'next/link';

export default function Home() {
  return (
    <div className="select-none flex flex-col ">
      <div className="rounded-sm mx-auto p-4 my-auto  backdrop-blur-[1px]">
        <div className="m-12 p-4">
          <h1 className="text-center mx-auto text-7xl font-black rounded-sm p-4">
            We are the{' '}
            <span className="text-emerald-300">
              Allen Computer Science Forum
            </span>
          </h1>
          <h2 className="text-center mx-auto text-3xl italic font-black m-2 rounded-sm p-4">
            More than a decade old
          </h2>
        </div>
      </div>
      <div className="text-center flex flex-row self-center m-24">
        <div className="ml-auto mr-60 rounded-sm mt-8 backdrop-blur-[1px]">
          <h2 className="text-center mx-auto rounded-sm text-5xl text-emerald-400">
            How do I join?
          </h2>
          <div className="flex flex-col text-center">
            <p className="mt-4 p-4">
              Check out our discord{' '}
              <Link
                target="_blank"
                className="text-cyan-500"
                href="https://discord.gg/yfTPTMMfsm"
              >
                here
              </Link>{' '}
              for important meeting updates!
            </p>
            <div className="mr-auto p-4">
              Also see our calendar at{' '}
              <Link className="text-emerald-400" href="/calendar">
                our calendar page
              </Link>
              , and attend one of our meetings!
            </div>
          </div>
        </div>
        <div className="backdrop-blur-[1px] rounded-sm mt-4 p-4">
          <h2 className="text-center mx-auto rounded-sm text-5xl text-emerald-400">
            Do I need to be good?
          </h2>
          <div className="flex flex-col">
            <p className="mt-4 p-4 text-center">
              You can be at any skill level!
            </p>
            <p className="p-4 text-center">
              Even if you&apos;re not interested in CS, it&apos;s a great place
              to network and make friends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
