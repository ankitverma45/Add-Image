import { useState } from "react";
import "./App.css";

function App() {
  const [imageList, setImageList] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);
  console.log(imageList);

  const getNewImages = () => {
    setImageList([
      ...imageList,
      {
        url: `https://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
        )}`,
      },
    ]);
  };
  const getremoveImage = () => {
    imageList.pop();
    console.log(imageList);
    setImageList([...imageList]);
  };

  const showImage = imageList.map((value) => {
    const background=value.url
    return (
      <div className="cardImage" style={{ backgroundImage: `url(${background})` }}>
      </div>
    );
  });
  return (
    <>
      <section className="header">
        <div className="cardHeader">{showImage}</div>
        <div className="buttonContainer">
          <button onClick={getremoveImage}>Remove</button>
          <button onClick={getNewImages}>Add</button>
        </div>
      </section>
    </>
  );
}

export default App;
