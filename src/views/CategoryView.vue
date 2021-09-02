<template>
<v-container>
  <v-row>
    <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
  </v-row>

  <v-row v-if="routeExists">
    <CardComponent v-for="(product, key) in products" :key="key" :product="product"/>
  </v-row>

  <v-row v-else justify="center">
    <v-col cols="6" class="text-center">
      <span class="my-5">¡Nada que ver aquí!</span>
    </v-col>
  </v-row>

  <v-row v-if="products.length == 0" justify="center">
    <v-col cols="6" class="text-center">
      <span class="my-5 mx-5 font-weight-bold grey--text text--darken-2">No hay articulos disponibles.</span>
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator"
import CardComponent from "@/components/CardComponent.vue"
import Product from "@/models/Product"
import ProductService from "@/service/ProductService"
import CategoryService from "@/service/CategoryService"
import CategoriesModule from "@/store/CategoriesModule"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { CardComponent }
})

export default class CategoryView extends Vue {
  
  categoriesModule: CategoriesModule = getModule(CategoriesModule)

  products: Product[] = []
  routeExists: boolean = false
  items = [
    { text: 'Inicio', disabled: false, href: '/' },
    { text: 'Productos', disabled: true, href: '' },
    { text: CategoryService.getCategoryByParam(this.$route.params.category)!.name, disabled: true, href: '' },
  ]

  created() {
    this.categoriesModule.setCategory(CategoryService.getCategoryByParam(this.$route.params.category))
    this.refresh()
  }

  refresh() {
    this.categoriesModule.setCategory(CategoryService.getCategoryByParam(this.$route.params.category))
    ProductService.getProducts(this, this.products).then(() => {
      this.routeExists = CategoryService.checkCategoryParam(this.$route.params.category)
      this.filter()
    })
  }

  filter() {
    this.products = this.products.filter(p => {
      return p.category!.order! == CategoryService.getCategoryByParam(this.$route.params.category).order
    })
  }

  @Watch("$route.params.category")
  onCategoryChanged() {
    this.items[2].text = CategoryService.getCategoryByParam(this.$route.params.category)!.name
    this.refresh()
  }
}

</script>