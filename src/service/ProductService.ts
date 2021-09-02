import Product from "@/models/Product"
import axios from "axios"
import Vue from "vue"
import JsonTool from "./tools/JsonTool"

export default class ProductService {

  static async getProducts(component: Vue, products: Product[]) { 
		const response = await component.axios.get("http://sva.talana.com:8000/api/product/")
		let convertedProducts = JsonTool.jsonConvert.deserializeArray(response.data, Product)
		products.splice(0, products.length)
    convertedProducts.forEach(p => products.push(p))
    console.log(convertedProducts)
  }

  static async filterProductById(component: Vue, id: number) {
		const response = await axios.get("http://sva.talana.com:8000/api/product/")
    let convertedProducts = JsonTool.jsonConvert.deserializeArray(response.data, Product)
    //@ts-ignore
    component.product = convertedProducts.filter(p => p.id = id)[0]
    console.log(convertedProducts.filter(p => p.id = id)[0])
  }
}