import {Any, JsonObject, JsonProperty} from "json2typescript"
import Category from "./Category"

@JsonObject("Attributes")
class Attributes {

    @JsonProperty("id", Number, true)
    id?: number = undefined

    @JsonProperty("name", String, true)
    name?: string = undefined

    @JsonProperty("icon", String, true)
    icon?: string = undefined

}

@JsonObject("Product")
export default class Product {


    @JsonProperty("id", Number, true)
    id?: number = undefined

    @JsonProperty("attributes", [Attributes], true)
    attributes?: [Attributes] = undefined
    
    @JsonProperty("category", Category, true)
    category?: Category = undefined

    @JsonProperty("name", String, true)
    name?: string = undefined

    @JsonProperty("code", String, true)
    code?: string = undefined

    @JsonProperty("stock", Number, true)
    stock?: number = undefined

    @JsonProperty("abstract", String, true)
    abstract?: string = undefined

    @JsonProperty("description", String, true)
    description?: string = undefined

    @JsonProperty("price", Number, true)
    price?: number = undefined

    @JsonProperty("photo", String, true)
    photo?: string = undefined
}
