import { Button } from "./components/ui/button";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="z-0 absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/src/assets/background-image.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/15 backdrop-blur-md" />
    </div>
  );
}

export default App;
