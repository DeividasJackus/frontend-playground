import Page1 from "./page1";
import Page2 from "./page2";

// Inspiration: https://www.csshunter.com/tailwind-css-scroll-snap/

export default function Page() {
  return (
    <>
      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <div className="snap-always snap-center">
          <Page1 />
        </div>
        <div className="snap-always snap-center">
          <Page2 />
        </div>
      </div>
    </>
  );
}
