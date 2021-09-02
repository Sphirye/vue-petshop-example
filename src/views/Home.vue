<template>
<v-container fluid class="pa-0 ma-0">
    <v-row no-gutters>
      <CardComponent v-for="(product, key) in products" :key="key" :product="product"/>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import CardComponent from "@/components/CardComponent.vue"
import Product from "@/models/Product"
import ProductService from "@/service/ProductService";

@Component({
  components: { CardComponent }
})

export default class Home extends Vue {

  products: Product[] = []

  created() {
    ProductService.getProducts(this, this.products)
  }

}

</script>