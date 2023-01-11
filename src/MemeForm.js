import { React, useState } from "react";
import memesData from "./memesData.js";

function MemeForm() {
  
  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomIndexFromMemesArray = Math.floor(
      Math.random() * memesArray.length
    );
    setMemeImage(memesArray[randomIndexFromMemesArray].url);
  }

  return (
    <main>
      <form class="w-full">
        <div className="grid md:grid-cols-2 m-4 gap-2">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="Shut up"
          />
          {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="and take my money"
          />
        </div>
      </form>

      <div className="mx-auto flex justify-center">
        <button
          onClick={getMemeImage}
          className="text-center font-medium text-md  text-white p-4 m-3 rounded-md bg-gradient-to-br from-purple-800 to-purple-400"
        >
          Get a new meme image 🖼️
        </button>
      </div>

      <div className="w-4/5 lg:w-1/2 p-4 pt flex mx-auto">
        <img className="w-full" src={memeImage} alt="" />
      </div>
    </main>
  );
}

export default MemeForm;
