export default function cyberClub() {
  return (
    <div className="flex flex-col space-y-16">
      <h1 className="text-7xl mx-auto font-black mt-10">Cybersecurity Club</h1>
      <div className="justify-center max-w-2xl min-w-2xl mx-auto p-4 bg-emerald-800 rounded-sm">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Current Leadership:
        </h2>
        <div className="text-xl m-2 flex flex-col space-y-4">
          <h3 className="">President: Zong Rui Lee</h3>
          <h3>Vice President: Nikhil Saravana</h3>
          <h3>Secretary: Andrew Wang</h3>
        </div>
      </div>
    </div>
  );
}
