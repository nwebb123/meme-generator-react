import React from "react";

function MemeForm() {
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
        <div className="btn mx-auto flex justify-center">
       
          <button className="text-center font-medium text-md  text-white p-4 m-3 rounded-md bg-gradient-to-br from-purple-800 to-purple-400">
            Get a new meme image 🖼️
          </button>
        </div>
      </form>
    </main>
  );
}

export default MemeForm;
