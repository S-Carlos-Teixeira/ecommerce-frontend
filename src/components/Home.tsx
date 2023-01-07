import React from "react"
import { IProduct } from "../interfaces/product"
import Product from "./Product"

type Products = null | Array<IProduct>


function Home() {
  const [Products, updateProducts] = React.useState<Products>(null)

  React.useEffect(() => {
    console.log("The Home Page has mounted")
  }, [])

  React.useEffect(() => {
    async function fetchProducts() {
      const resp = await fetch("/api/products")
      const ProductsData = await resp.json()
      updateProducts(ProductsData)
    }
    fetchProducts()
  }, [])

  return (
    <section>
      <div>
        <div>
          <p>Project Ecommerce</p>
        </div>
      </div>
      <div>
      <div>
        {Products?.map((product: IProduct) => {
          return <Product 
            key={product._id}
            {...product}
          />
        })}
      </div>
    </div>
    </section>
  )
}

export default Home