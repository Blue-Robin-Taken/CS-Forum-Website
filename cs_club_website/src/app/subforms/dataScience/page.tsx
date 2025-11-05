import Link from 'next/link';
import Image from 'next/image';
export default function dataScience() {
  return (
    <div>
      <div className="flex flex-col space-y-16 items-center">
        <h1 className="text-7xl mx-auto font-black mt-10">Data Science Club</h1>
        <div className="bg-emerald-800 text-left p-4 text-xl/8 flex flex-col gap-2">
          <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
            Welcome!
          </h2>

          <p className="mx-8 max-w-7xl">
            Welcome to Allen High School&apos;s Data Science and Statistics
            Club! The main objective of our club is to encourage students to
            explore data science and to show how it&apos;s used in the real
            world. We learn practical skills, starting from cleaning and
            processing raw information to analyzing it for patterns using tools
            like Python. Our club works on group projects, including analyzing
            sports stats or helping with local issues, to see how data can be
            used to solve real-world problems. Above all, we want students to be
            equipped with the skill of using data to tell a story and make
            better decisions in their future careers. Interest and Q/A Form:
            <Link
              target="_blank"
              className="text-black"
              href="https://forms.gle/cgGGJHH52zb6efbDA"
            >
              {' '}
              <span className="underline underline-offset-4">Click Here!</span>
            </Link>
          </p>
          <Image
            className="self-center m-8"
            src="/photos/DataScience/main.jpg"
            width={500}
            height={500}
            alt="DataScience"
          />
        </div>
      </div>
    </div>
  );
}
