import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Text>deneme 1</Text>
    </div>
  );
}

export default App;
