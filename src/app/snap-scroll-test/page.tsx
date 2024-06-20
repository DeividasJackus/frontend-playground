import Section1 from "./section1";
import Section2 from "./section2";

// Inspiration: https://www.csshunter.com/tailwind-css-scroll-snap/

export default function Page() {
  return (
    <>
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <div className="snap-always snap-center">
          <Section1 />
        </div>
        <div className="snap-always snap-center">
          <Section2 />
        </div>
      </div>
    </>
  );
}
