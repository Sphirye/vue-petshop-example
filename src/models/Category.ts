import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("Category")
export default class Category {

    @JsonProperty("param", String, true)
    param?: string = undefined
    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("name", String, true)
    name?: string = undefined
    @JsonProperty("order", Number, true)
    order?: number = undefined

}
