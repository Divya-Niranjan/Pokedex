import Sample from "./Sample";
import Pokemon from "./Pokemon";
import "./input.css"
function App() {
  return (
    <div className="text-center w-[100%] h-full text-3xl mt-8 font-extrabold">
      Pokemon Cards
      <Pokemon />
    </div>
  );
}

export default App;
