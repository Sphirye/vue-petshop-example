<template>
  <v-app-bar app flat fixed color="grey lighten-2" outlined height="60px">
    <v-spacer/>
    <div style="width: 30%;" class="mx-3">
      <v-text-field outlined label="Buscador de Productos y Categorías" hide-details flat dense prepend-inner-icon="mdi-magnify" rounded/>
    </div>
    <v-menu min-width="500px" offset-y :close-on-content-click="false">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon x-large>mdi-shopping</v-icon>
        </v-btn>
      </template>

      <div class="white px-5 py-3" v-if="purchase != {}">
        <span class="text-h6">Resumen de Compra:</span>
        <CartItemComponent v-for="(item, key) in purchase[0].detailLines" :key="key" :item="item"/>
        <div class="d-flex px-5 py-3" style="width: 100%;"> <span class="mr-auto">Sub-Total:</span> <span class="ml-auto">{{purchase[0].total}}</span></div>
      </div>


    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Purchase from "@/models/Purchase"
import PurchaseService from "@/service/PurchaseService"
import PurchaseModule from "@/store/PurchaseModule"
import CartItemComponent from "@/components/CartItemComponent.vue"
import { getModule } from "vuex-module-decorators"


@Component({
  components: { CartItemComponent }
})

export default class HeaderComponent extends Vue {

  purchase: Purchase = {}

  created() {
    PurchaseService.getPurchase(this, this.purchase)
  }
  
}

</script>