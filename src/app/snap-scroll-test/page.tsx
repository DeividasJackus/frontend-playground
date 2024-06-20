import Section1 from "./section1";
import Section2 from "./section2";

// Inspiration: https://www.csshunter.com/tailwind-css-scroll-snap/

export default function Page() {
  return (
    <>
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <div className="flex min-h-screen snap-always snap-center bg-green-800">
          <div className="flex mx-auto items-center justify-center">
            <Section1 />
          </div>
        </div>
        <div className="flex min-h-screen snap-always snap-center bg-indigo-500">
          <div className="flex mx-auto items-center justify-center">
            <Section2 />
          </div>
        </div>
      </div>
    </>
  );
}
