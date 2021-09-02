import Category from "@/models/Category"
import store from "@/store/store"
import { Module, Mutation, VuexModule } from "vuex-module-decorators"

@Module({dynamic: true, store, name: "CategoriesModule"})

export default class CategoriesModule extends VuexModule {

    actualCategory: Category | undefined = undefined

    @Mutation
    setCategory(category: Category) {
        this.actualCategory = category
    }

}