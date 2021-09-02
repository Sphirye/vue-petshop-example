import Product from "@/models/Product"
import Purchase from "@/models/Purchase"
import Vue from "vue"
import JsonTool from "./tools/JsonTool"

export default class PurchaseService {

  static async getPurchase(component: Vue, purchase: Purchase) { 
	  const response = await component.axios.get("http://sva.talana.com:8000/api/purchase/")
    let convertedPurchase = JsonTool.jsonConvert.deserializeArray(response.data, Purchase)
    //@ts-ignore
    component.purchase = convertedPurchase
  }
}