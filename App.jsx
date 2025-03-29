import QueryInput from "./components/QueryInput";
import Results from "./components/Results";
import History from "./components/History";

function App() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <QueryInput />
      <Results />
      <History />
    </div>
  );
}

export default App;
