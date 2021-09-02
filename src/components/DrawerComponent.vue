<template>
  <v-navigation-drawer app permanent width="200px" color="grey lighten-2">
      <v-list-item @click="$router.push('/').catch((err) => {})">
        <v-list-item-content style="height: 60px;">
          <v-list-item-title class="display-1 display-1 grey--text text--darken-1">
            Logo
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider/>

      <v-list>
        <v-list-item dense>
          <v-list-item-content>
            <v-list-item-title class="text-h5 display-1 grey--text text--darken-1">
              Categorías <v-icon>mdi-menu</v-icon>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-for="(category, key) of categories" :key="key" @click="setActualCategory(category)">
          <v-list-item-content>
            <v-list-item-title>{{category.name}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import CategoryService from "@/service/CategoryService"
import Category from "@/models/Category"
import CategoriesModule from "@/store/CategoriesModule"
import { getModule } from "vuex-module-decorators"

@Component({
  components: { }
})

export default class DrawerComponent extends Vue {

  categoriesModule: CategoriesModule = getModule(CategoriesModule)
  
  categories: Category[] = []

  setActualCategory(category: Category) {
    this.categoriesModule.setCategory(category)
    this.$router.replace("/category/" + this.getCategoryByOrder(category.order!)!.param).catch((err) => {})
  }

  created() {
    CategoryService.getCategories(this, this.categories)
  }

  getCategoryByOrder(order: number) {
    return CategoryService.getCategoryByOrder(order)
  }

}

</script>