import React from "react";
import { useGlobalContext } from "../context";
import images from "../images";

const LeftEditorSidebar = () => {
  const { changeBg, urlBgHandler, urlBg, category } = useGlobalContext();
  let filter = images.filter((img) => {
    if (category == "Amour" || category == "Love") {
      return img.category == "Love";
    }
    if (category == "Anniversaire" || category == "Happy Birth Day") {
      return img.category == "Hbd";
    }
    if (category == "Praise" || category == "Louange") {
      return img.category == "Praise";
    }
    if (category == "Bonne Année" || category == "Happy New Year") {
      return img.category == "NewYear";
    }
    if (category == "Simple") {
      return img.category == "Simple";
    }
    if (category == "Triste" || category == "Sad") {
      return img.category == "Sad";
    }
  });
  return (
    <div className="backgrounds">
      <div className="bgUrlParent">
        <input
          type="text"
          id="bgUrl"
          className="form-control"
          onChange={(e) => urlBg(e.target.value)}
          placeholder="Url d'image d'arriere plan"
        />
        {/* <label htmlFor="bg" className="btn btn-sm mt-1 btn-dark" onClick={handle}>Mon image</label> */}
        <label
          className="form-label btn btn-sm mt-1 btn-dark"
          onClick={(e) => urlBgHandler()}
        >
          Definir
        </label>
      </div>
      {/* </form> */}

      {filter[0].items.map((item, index) => {
        return (
          <div className="img" key={index} onMouseUp={() => changeBg(item.img)}>
            <img src={item.img} alt={item.img} />
          </div>
        );
      })}
    </div>
  );
};

export default LeftEditorSidebar;
