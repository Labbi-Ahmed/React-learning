import "./App.css";
import HelloWorld from "./components/Heading/HelloWorld";
import Home from "./components/MainComponent/Home";

export default function App() {
  return (
    <>
      <HelloWorld color="green-100" />
      <HelloWorld color="green-200" />
      <HelloWorld color="green-300" />
      <HelloWorld color="green-400" />
      <HelloWorld color="green-500" />
      <HelloWorld  color="green-600" />
      <HelloWorld color="green-700" />
      <HelloWorld color="green-800" />

      <Home />
    </>
  );
}
