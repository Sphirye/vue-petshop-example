<template>
    <v-sheet class="d-flex align-center" width="100%" height="60px">
      <div style="width: 33%">
        <span class="text-truncate">{{product.name}}</span>
        <v-spacer/>
        <span>Precio: {{product.price}}</span>
      </div>
      <div class="d-flex justify-center" style="width: 33%;">
        <div class="d-flex justify-space-around mx-2 px-1 py-2" style="border: 2px solid #7E8282; width: 50%;">
          <v-icon small @click="item.quantity > 0 ? item.quantity-- : ''">fas fa-minus</v-icon>
          <span class="font-weight-bold grey--text text--darken-2">{{item.quantity}}</span>
          <v-icon small @click="item.quantity < 99 ? item.quantity++ : ''">fas fa-plus</v-icon>
        </div>
      </div>
      <div class="d-flex justify-center text-end" style="width: 33%;">
        Sub-Total: {{item.total}}
      </div>
    </v-sheet>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import Product from "@/models/Product"
import ProductService from "@/service/ProductService"
import DetailLines from "@/models/DetailLines"

@Component({
  components: { }
})

export default class CartItemComponent extends Vue {

  @Prop() item!: DetailLines
  product: Product = {}
  amount: number = 0

  created() {
    ProductService.filterProductById(this, 1)
    console.log(this.product)
  }

}

</script>