import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainnav from "./components/mainNav";
import Welcome from "./components/Welcome";
import Form from "./components/Form";
import Choice from "./components/Choice";
import Poem from "./components/Poem";
import Help from "./components/Help";
import About from "./components/About";
import WritePoem from "./components/write";
import Command from "./components/Command";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Mainnav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/write-poem" element={<WritePoem />} />
          <Route path="/poem-choice" element={<Choice />} />
          <Route path="/poem-editor" element={<Poem />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route path="/command" element={<Command />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
