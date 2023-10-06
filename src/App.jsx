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
function App() {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    // Select a random category
    // const randomCategoryIndex = Math.floor(Math.random() * images.length);
    // const randomCategory = images[3]; //replace with randomCategoryIndex to have a random image from any category

    // Select a random image from the selected category
    const bg = [
      // {img:``},
      {
        img: `https://cdn.pixabay.com/photo/2016/02/17/19/08/lotus-1205631_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2016/01/08/11/57/butterflies-1127666_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2018/03/04/23/32/book-3199610_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2018/02/05/13/15/sunset-3132179_640.jpg`,
      },
      // {
      //   img: `https://cdn.pixabay.com/photo/2017/01/16/11/49/picture-book-1983812_640.jpg`,
      // },
      {
        img: `https://cdn.pixabay.com/photo/2016/08/30/07/49/landscape-1629977_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2014/08/16/18/17/book-419589_640.jpg`,
      },
      {
        img: `https://cdn.pixabay.com/photo/2018/05/27/11/00/poetry-album-3433279_640.jpg`,
      },
    ];
    const randomImageIndex = Math.floor(Math.random() * bg.length);
    const randomImage = bg[randomImageIndex].img;
    // console.log(randomImage);

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
