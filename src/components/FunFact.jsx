
const FunFact = () => {

    const funFacts = [
        {
            id: 1,
            animal: "dophin",
            fact: "Dolphins have names for each other"
        },
        {
            id: 2,
            animal: "octopus",
            fact: "Octopuses have 3 hearts"
        },
        {
            id: 3,
            animal: "giraffe",
            fact: "A Giraffe's tongue can be up to 20 inches long"
        }
    ]

    // .map()
    // the best way to display array elements in React is by using .map()
    // .map() will go through each individual element and apply the designated JSX to each item 
    const funFactElements = funFacts.map((item) => 
        // add key={item.id} to avoid error in browser that each element of an array should have an id
        <div key={item.id}>
            <h3>Animal: {item.animal}</h3>
            <p>Fact: {item.fact}</p>
        </div> 
    )

  return (
    <>
        <h2>Fun Facts!</h2>
        {funFactElements}
    </>
  )
}

export default FunFact