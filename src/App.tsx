import { FiveBandsCard, FourBandsCard } from "./components/Cards";

function App() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative">
      <img
        src="/src/assets/background-image.jpg"
        alt="BackgroundImage"
        className="absolute inset-0 w-full h-full object-cover blur-lg -z-1"
      />

      <div className="relative z-1 flex flex-col gap-10">
        <FourBandsCard />
        <FiveBandsCard />
        <img
          src="/src/assets/resistor-table.jpg"
          alt="Resistor Table"
          className="mb-[35px] h-[400px] w-[1000px]
        max-sm:h-[250px] max-sm:w-full max-sm:max-w-[300px]
        max-md:h-[300px] max-md:max-w-[500px]
        max-lg:h-[350px] max-lg:max-w-[700px]"
        />
      </div>
    </div>
  );
}

export default App;
