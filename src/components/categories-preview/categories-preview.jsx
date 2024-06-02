/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { addCollentionAdDocuments, getCategoriesAndDocuments } from '../../utils/firebase';
import { SHOP_DATA } from '../../shop-data';
import { CategoryPreview } from '../category-preview/category-preview';

export function CategoriesPreview() {

  const [categories, setCategories] = useState({})

   useEffect(() => {
     addCollentionAdDocuments('categories', SHOP_DATA)
   },[])

  useEffect(() => {
    const getCategories = async () => {
      const category = await getCategoriesAndDocuments()
      setCategories(category)
    }

    getCategories()
  },[])

  return (
    <>
      {
        Object.keys(categories).map(title => {
          const products = categories[title]
          return <CategoryPreview key={title} title={title} products={products} />
        })
      }
    </>
  )
}