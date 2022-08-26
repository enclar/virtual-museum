import React, { useState } from "react";

function App() {
  const [image, setImage] = useState("https:\/\/images.collection.cooperhewitt.org\/230909_9e821506a5d46aab_n.jpg");

  const handleClick = () => {
    fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.objects.getImages&access_token=4845918c6c961dd37cbb22942d5c2ec8&object_id=18101051')
    .then((response) => response.json())
    .then((data) => {
      setImage(data.images[0].n.url)
      console.log(data.images[0].n.url)
    });
  };

  return (
    <div className="App">
      <h1>Testing the Cooperhewitt API</h1>
      <button onClick={handleClick}>Change Image</button>
      <img
        src={image}
        alt="fragement"
      />
    </div>
  )
}

export default App
