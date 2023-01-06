import React from "react";

function MemeForm() {
  return (
    <form class="w-full">
      <div class="flex flex-wrap justify-center mx-8">

        <div class="w-full m-3 md:1/2">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-first-name"
            type="text"
            placeholder="Shut up"
          />
          {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
        </div>

        <div class="w-full m-3">
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="and take my money"
          />
        </div>

      </div>

      <div class="flex justify-center mb-6">
        <button className="w-1/2 text-center font-medium text-md text-white justify-center p-4 m-3 rounded-md bg-gradient-to-br from-purple-800 to-purple-400">
          Get a new meme image 🖼️
        </button>
      </div>
    </form>
  );
}

export default MemeForm;
