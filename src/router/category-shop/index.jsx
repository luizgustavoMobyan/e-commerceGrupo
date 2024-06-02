/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCategoriesAndDocuments } from "../../utils/firebase"
import { ProductCard } from '../../components/product-card/product-card'

export function CategoryShop(){

const { category } = useParams()

const [categoriesMap, setCategoriesMap] = useState({})
const [products, setProducts] = useState(categoriesMap[category])

useEffect(() => {
    const getCategories = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(category)
    }

    getCategories()
  },[])

  useEffect(() => {
    setProducts(categoriesMap[category])
  },[category, categoriesMap])

  return (
    <>
    <h2>{category.toUpperCase()}</h2>
    <div>
        {
        products && products.map((product) => <ProductCard key={product.id} product={product} />)
        }
    </div>
    </>
  )
}