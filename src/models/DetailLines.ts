import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("DetailLines")
export default class DetailLines {

    @JsonProperty("quantity", Number, true)
    quantity?: number = undefined
    @JsonProperty("total", Number, true)
    total?: number = undefined
    @JsonProperty("product", Number, true)
    product?: number = undefined

}