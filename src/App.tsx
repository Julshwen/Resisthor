import { FiveBandsCard, FourBandsCard } from "./components/Cards";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <img
        src="/src/assets/background-image.jpg"
        alt="BackgroundImage"
        className="absolute inset-0 w-full h-full object-cover blur-lg -z-10"
      />

      <div className="relative z-10 flex flex-col gap-10">
        <FourBandsCard />
        <FiveBandsCard />
      </div>
    </div>
  );
}

export default App;
