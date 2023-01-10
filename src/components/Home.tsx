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
    <section className="hero is-link is-fullheight-with-navbar is-link">
      <div className="hero-body has-text-centered">
        <div className="container">
          <p className="title">Project Ecommerce</p>
        </div>
      </div>
      <div className="is-flex-direction-row">
      <div className="is-flex-direction-row">
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