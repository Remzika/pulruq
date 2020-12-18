import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";

function App() {
  console.log(process.env);

  return (
    <div className="App">
      <Navbar />
      <Signup />
      <Text>deneme 1</Text>
      <Text>This is the first row created by eyup</Text>
      <Text>This is the second row created by eyup</Text>
      <h1>Pull request 3</h1>
      <h1>Deneme Temel</h1>
    </div>
  );
}

export default App;
