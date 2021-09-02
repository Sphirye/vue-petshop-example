import Category from "@/models/Category"
import Vue from "vue"
import JsonTool from "./tools/JsonTool"

export default class CategoryService {

  static async getCategories(component: Vue, categories: Category[]) {
	  const response = await component.axios.get("http://sva.talana.com:8000/api/product-category")
	  let convertedCategories = JsonTool.jsonConvert.deserializeArray(response.data, Category)
	  categories.splice(0, categories.length)
	  convertedCategories.forEach(c => categories.push(c))
  }

  static getCategoryByOrder(order: number) {
    switch(order) {
      case(1): return { name: "Alimentos", param: "food" }
      case(2): return { name: "Juguetes", param: "toys" } 
      case(3): return { name: "Gatos", param: "cats" } 
      case(4): return { name: "Perros", param: "dogs" } 
      case(5): return { name: "Medicamentos", param: "medicine" } 
    }
  }
//@ts-ignore
  static getCategoryByParam(param: string): Category {
    switch(param) {
      case("food"): return { order: 1 ,name: "Alimentos", param: "food" }
      case("toys"): return { order: 2 ,name: "Juguetes", param: "toys" } 
      case("cats"): return { order: 3 ,name: "Gatos", param: "cats" } 
      case("dogs"): return { order: 4 ,name: "Perros", param: "dogs" } 
      case("medicine"): return { order: 5, name: "Medicamentos", param: "medicine" } 
    }
  }

  static checkCategoryParam(param: string) {
    let exists = false
    let params = ["food", "toys", "cats", "dogs", "medicine"]
    params.forEach(p => { 
      if (param == p) { exists = true }
    })
    return exists
  }

}