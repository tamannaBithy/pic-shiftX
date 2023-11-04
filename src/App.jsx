import Header from "./components/Header";
import ImgLayout from "./components/imgLayout/ImgLayout";
import { SelectionProvider } from "./context/SelectionContext";

function App() {
  return (
    <SelectionProvider>
      <div className="wrapper space-y-8">
        <Header />
        <ImgLayout />
      </div>
    </SelectionProvider>
  );
}

export default App;
