const Product = ({product}) => {
    return(
        <div>
            <h4>Product: {product.name}</h4>
            <p>Description: {product.description}</p>
        </div>
    )
}

const ProductList = ({products}) => {

    // const products = [
    //     {
    //         id: 1, 
    //         name: "Smart Mug",
    //         description: "A temperature controlled mug that keeps your drink hot for hours."
    //     },
    //     {
    //         id: 2,
    //         name: "Mini Projector",
    //         description: "A portable projector that turns any wall into a movie screen."
    //     },
    //     {
    //         id: 3,
    //         name: "Wireless Charger Stand",
    //         description: "A sleek stand that charges your phone without cables."
    //     }
    // ]

  return (
    <>
        <h2>ProductList</h2>
        {products.map((product) => (
            // <div>
            //   <h4>Product: {product.name}</h4>
            //   <p>{product.description}</p>
            // </div>
            <Product product={product}/>
        ))}
    </>
  )
}

export default ProductList

//320