import FunFact from "./components/FunFact"
import ProductList from "./components/ProductList"

function App() {
 
  const products = [
        {
            id: 1, 
            name: "Smart Mug",
            description: "A temperature controlled mug that keeps your drink hot for hours."
        },
        {
            id: 2,
            name: "Mini Projector",
            description: "A portable projector that turns any wall into a movie screen."
        },
        {
            id: 3,
            name: "Wireless Charger Stand",
            description: "A sleek stand that charges your phone without cables."
        }
  ]

  const animals = ["Bird", "Deer", "Fox"]

  // create an array of html elements to display each item in our elements array
  const elements = []

  for(let i =0; i < animals.length; i++){
    const animalElement = <div>
      <h3>Animal: {animals[i]}</h3>
      <p>added to the habitat!</p>
    </div>

    elements.push(animalElement)
  }

  return (
    <>
      <h1>2b-Iterating Props</h1>
      {/* {animals} */}
      {/* {elements} */}
      <FunFact />
      <ProductList products={products} />
    </>
  )
}

export default App
