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
import { useEffect, useState } from "react";
import bg from "./backgrounds";
function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Select a random category
    // const randomCategoryIndex = Math.floor(Math.random() * images.length);
    // const randomCategory = images[3]; //replace with randomCategoryIndex to have a random image from any category

    // Select a random image from the selected category
    const randomImageIndex = Math.floor(Math.random() * bg[0].items.length);
    const randomImage = bg[0].items[randomImageIndex].img;
    console.log(randomImage);

    // Set the random image as the background image
    setBackgroundImage(randomImage);
  }, []);

  return (
    <div
      className="app"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <BrowserRouter>
        <Mainnav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/form" element={<Form />} />
          <Route path="/write-poem" element={<WritePoem />} />
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
