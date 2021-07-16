import {Category} from "~/composable/api/interfaces/category";
import {ProductVariant} from "~/composable/api/interfaces/productVariant";


export interface Product {
  id: string
  category: Category
  cover: string
  title: string
  variants: ProductVariant[]
  producer: string
  allergens: string
}
