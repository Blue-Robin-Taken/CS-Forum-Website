import Image from 'next/image';
export default function dataScience() {
  return (
    <div className="flex flex-col gap-16 items-center m-16">
      <div className="flex flex-row gap-8 items-center">
        <h1 className="text-7xl mx-auto font-black mt-10">Project Renew</h1>
        <Image
          width={250}
          height={250}
          alt="project renew"
          src="/photos/Renew/projectRenew.jpg"
          className="rounded-sm border-2 border-white m-4"
        />
      </div>

      <div className="bg-emerald-800 text-left p-4 text-xl/8 flex flex-col gap-2">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          What we do
        </h2>
        <p className="mx-8 max-w-7xl">
          Our goal is to recycle old hardware or tech and turn them into
          something that is functional. We are going to start creating smaller
          projects that are easy to follow and replicable at home. Down the
          road, we might be able to get into more complicated projects like pc
          building or tech repairs.
        </p>
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Location
        </h2>
        <p className="mx-8 max-w-7xl text-center">
          Holbein&apos;s room (SB 202)
        </p>
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Where To Donate
        </h2>
        <p className="mx-8 max-w-7xl text-center">
          Box that says ReNew in Holbein&apos;s room (will upload image soon)
        </p>
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Service Hours
        </h2>
        <p className="mx-8 max-w-7xl text-center">
          +1 hour per meeting
          <br />
          +1 hour for donating small/cheap tech
          <br />
          +2 hours for donating big/expensive tech
        </p>
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          What HelperHelper should look like
        </h2>
        <Image
          className="align-middle justify-center self-center"
          src="/photos/Renew/serviceHours.png"
          width={500}
          height={500}
          alt="Name of org: Project ReNew, Name of opportunity: (donation or helping recycle tech),
          Category of need: Technology, Coordinator first and last name: Jake Holbein, 
          Coordinator Email Address: ahsprojectrenew25@gmail.com"
        />

        {/* Our Socials section */}
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-3xl m-2 p-2 text-center font-bold">Our Socials</h2>
          <div className="flex flex-row gap-6 items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ahs_project.renew?igsh=MWc2czBucmVhc2s3bA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/photos/Renew/Instagram_logo_2022.svg.png"
                alt="Project Renew Instagram"
                width={50}
                height={50}
              />
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/yK6cYjPzTT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Image
                src="/photos/Renew/Discord_logo.png"
                alt="Project Renew Discord"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="justify-center max-w-2xl min-w-2xl mx-auto p-4 bg-emerald-800 rounded-sm">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Current Leadership:
        </h2>
        <div className="text-xl m-2 flex flex-col space-y-4">
          <h3>President: Alan Ge</h3>
          <h3>Vice President: Andrew Wang</h3>
          <h3>Secretary: Tawqir Quraishi</h3>
        </div>
      </div>
    </div>
  );
}
