export default function About() {
  return (
    <div className="flex flex-col space-y-16">
      <h1 className="text-7xl mx-auto font-black mt-10">About</h1>
      <div className="justify-center max-w-2xl mx-auto p-4 bg-emerald-800 rounded-sm">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Who are we?
        </h2>
        <p className="text-xl m-2">
          We&apos;re the Computer Science Club/Forum at Allen High School.
          We&apos;re more than a decade old and have many sub clubs.
        </p>
      </div>
      <div className="justify-center max-w-2xl min-w-2xl mx-auto p-4 bg-emerald-800 rounded-sm">
        <h2 className="text-3xl m-2 p-2 align-middle justify-center text-center font-bold">
          Current Leadership:
        </h2>
        <div className="text-xl m-2 flex flex-col space-y-4">
          <h3 className="">President: Julian Thomas</h3>
          <h3>Vice President: Advaiya Lad</h3>
          <h3>Secretary: Eshaan Deshmukh</h3>
        </div>
      </div>
    </div>
  );
}
