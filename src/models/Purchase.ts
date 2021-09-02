import {JsonObject, JsonProperty} from "json2typescript"
import DetailLines from "./DetailLines"


@JsonObject("Purchase")
export default class Purchase {

    @JsonProperty("id", Number, true)
    id?: number = undefined
    @JsonProperty("customerName", String, true)
    customerName?: string = undefined
    @JsonProperty("customerLastName", String, true)
    customerLastName?: string = undefined
    @JsonProperty("customerAddressStreet", String, true)
    customerAddressStreet?: string = undefined
    @JsonProperty("total", Number, true)
    total?: number = undefined
    @JsonProperty("status", String, true)
    status?: string = undefined
    @JsonProperty("customerAddressCounty", Number, true)
    customerAddressCounty?: number = undefined
    @JsonProperty("detailLines", [DetailLines], true)
    detailLines?: [DetailLines] = undefined
    

}
