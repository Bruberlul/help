
function App() {
  return (
    <div className="min-h-screen flex flex-col text-white">
      <script src="F:\Python\Carbon Footprint\src\script.js" type="text/javascript" />
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Whats your</h2>
        <h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">Carbon Footprint?</h1>

        <form 
          method="post" 
          target="_blank" 
          action="apifunction()" 
          className="appearance-none">
            
          <div className="flex flex-col md:flex-row justify-center mb-4 text-black border-spacing-12">
            <input 
              type="number"
              id="miles"
              placeholder="How many miles?"
              className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0"
            />  
            <select method="post" className="bg-white text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150 md:rounded-br-none md:rounded-tr-none md:rounded-tl-none md:rounded-bl-none rounded-full">
              <option value="SmallGasCar">Small Gas Car</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <input 
              type="submit" 
              value="Calculate"
              id="vehicle"
              className="bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-6 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
            /> 
          </div>
        </form>

        <p className="" class="results"></p>

      </main>

      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Built by Derek with React JS & Tailwind CSS </p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">About</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Calculate</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact </a>
					</div>
			</footer>
    </div>
  )
}

export default App