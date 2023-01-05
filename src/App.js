import "./App.css";
import Header from "./Header"

function App() {
  return (
    <>
      <div className="card">
        <Header />
        <main>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap">
              <div class="w-1/2">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>

              <div class="">
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <button>Get a new meme image 🖼️</button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
