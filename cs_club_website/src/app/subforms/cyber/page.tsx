import Image from 'next/image';

export default function cyberClub() {
  return (
    <div className="flex flex-col space-y-16 items-center">
      <h1 className="text-7xl mx-auto font-black mt-10">Cybersecurity Club</h1>
      <div className="bg-emerald-800 text-left p-4 text-xl/8 flex flex-col gap-2">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Who are we?
        </h2>
        <p className="mb-8">
          Welcome! We&apos;re the Allen cybersecurity club, made up by students
          with an interest in computer science and the digital world.
        </p>
        <div className="mx-8">
          <p>Founded - 2018</p>
          <p>60+ Members </p>
          <p className="mb-8">
            4x CyberPatriot National Finalists Meetings Wednesday at the Steam
            MPR after school
          </p>
        </div>
        <p>
          We participate in a variety of competitions and meetings, including:
        </p>
        <ul className="list-disc p-4 tracking-wide ml-8">
          <li>
            CyberPatriot: The largest National Youth Cybersecurity competition
            run by the Air Force, where teams learn how to manage -
            vulnerabilities and secure compromised systems
          </li>
          <li>
            HackTheBox: Members act as “hackers” to practice compromising
            vulnerable systems
          </li>
          <li>
            PicoCTF: A “Capture the Flag” type activity hosted by Carnegie
            Mellon where members solve puzzles using skills like Forensics,
            Binary Exploitation, Cryptography, and more
          </li>
          <li>
            Tech Talks: We host presentations over cyber-skills such as
            networking, cryptography, forensics, and other cybersecurity skills
          </li>
        </ul>
        <div className="absolute right-50 invisible 2xl:visible">
          <Image
            src="/photos/Cybersecurity/nats.jpg"
            width={250}
            height={250}
            alt="CyberPatriot Nationals"
          />
        </div>
      </div>

      <div className="justify-center max-w-2xl min-w-2xl mx-auto p-4 bg-emerald-800 rounded-sm">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Current Leadership:
        </h2>
        <div className="text-xl m-2 flex flex-col space-y-4">
          <h3 className="">President: Zong Rui Lee</h3>
          <h3>Vice President: Nikhil Saravana</h3>
          <h3>Secretary: Ashray Shah</h3>
        </div>
      </div>

      <div className="grid grid-rows-2 gap-4 md:grid-rows-1 sm:grid-rows-1 justify-center mx-auto align-middle">
        <div className="flex-row flex self-center gap-4 sm:flex-col md:flex-col xl:flex-row justify-center mx-auto">
          <Image
            src="/photos/Cybersecurity/nats2.jpg"
            width={500}
            height={500}
            alt="CyberPatriot Nationals"
          />
          <Image
            src="/photos/Cybersecurity/yay.jpg"
            width={500}
            height={500}
            alt="CyberPatriot Nationals"
          />
        </div>
        <div className="flex-row flex self-center gap-4 sm:flex-col md:flex-col xl:flex-row justify-center mx-auto">
          <Image
            className="object-contain"
            src="/photos/Cybersecurity/nats.jpg"
            width={500}
            height={500}
            alt="CyberPatriot Nationals"
          />
          <Image
            className="object-contain"
            src="/photos/Cybersecurity/congress.jpg"
            width={500}
            height={500}
            alt="CyberPatriot Nationals"
          />
        </div>
      </div>
    </div>
  );
}
