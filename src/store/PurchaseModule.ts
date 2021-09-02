import Category from "@/models/Category"
import Purchase from "@/models/Purchase"
import store from "@/store/store"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"

@Module({dynamic: true, store, name: "PurchaseModule"})

export default class PurchaseModule extends VuexModule {

    purchase: Purchase | undefined = undefined

    @Mutation
    setPurchase(purchase: Purchase) {
        this.purchase = purchase
    }

}