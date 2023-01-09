import React from "react"
import { useParams } from "react-router-dom"
import { IProduct } from "../interfaces/product"
import Product from "./Product"

function ShowProduct() {
  const [product, updateProducts] = React.useState<IProduct | null>(null)
  const { productId } = useParams()
  

  React.useEffect(() => {
    console.log("Your product is available")
  }, [])

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch(`/api/product/${productId}`)
      const ProductsData = await resp.json()
      updateProducts(ProductsData)
      console.log(ProductsData);
      
    }
    fetchProducts()
  }, [])

  return <section>
    <div>
      <div>
      {product && <Product
          key={product._id}
          {...product}
        />}
      </div>
    </div>
  </section>
}

export default ShowProduct