<template>
  <v-col cols="4" class="d-flex justify-center align-center">
    <v-card class="transparent pa-2" flat tile width="300px" max-width="300px" height="500px">
      <v-img class="d-flex align-end" contain :src="product.photo" width="100%" height="350px" style="border: 1px solid #7E8282; border-radius: 4px;">
        <v-sheet width="50%" class="text-center py-1 font-weight-bold grey--text text--darken-3" color="success">
          Disponible
        </v-sheet>
      </v-img>
      <v-card-subtitle class="text-h6 py-0 text-truncate">
        {{product.name}}
      </v-card-subtitle>

      <v-card-subtitle class="text-h6 py-2">
        {{product.price}}
      </v-card-subtitle>

      <div class="d-flex align-center justify-space-around">
        <div class="d-flex justify-space-around px-1 py-2" style="border: 2px solid #7E8282; width: 35%;">
          <v-icon small @click="amount > 0 ? amount-- : ''">fas fa-minus</v-icon>
          <span class="font-weight-bold grey--text text--darken-2">{{amount}}</span>
          <v-icon small @click="(amount < 99) && (amount < product.stock) ? amount++ : ''" :color="amount == product.stock ? 'red' : ''">fas fa-plus</v-icon>
        </div>

    <v-dialog v-model="dialog" width="500" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed v-bind="attrs" v-on="on" dark width="55%" height="100%" color="grey darken-3">
          <v-icon class="py-1" large dark>mdi-cart-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5">
          Producto agregado
          <v-spacer/>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-divider/>

        <div class="d-flex">
          <v-img contain :src="product.photo" width="50%" height="350px"/>

          <div style="width: 50%;" class="py-5 px-3">
            <span class="py-1">Nombre: {{product.name}}</span>
            <v-spacer/>
            <span class="py-1">Codigo: {{product.code}}</span>
            <v-spacer/>
            <span class="py-1">Precio: {{product.price}}</span>
            <v-spacer/>
            <div class="d-flex align-center py-1">
              <span>Cantidad:</span>
              <div class="d-flex justify-space-around align-center mx-2 px-1 py-2" style="border: 2px solid #7E8282; width: 35%; height: 35px;">
                <v-icon dense small @click="amount > 0 ? amount-- : ''">fas fa-minus</v-icon>
                <span class="font-weight-bold grey--text text--darken-2">{{amount}}</span>
                <v-icon dense small @click="amount < 99 ? amount++ : ''">fas fa-plus</v-icon>
              </div>
            </div>
            <div class="my-1">Sub-Total: {{product.price * amount}}</div>
          </div>
        </div>

        <v-card-actions>
          <v-btn depressed text @click="dialog = false">
            Seguir comprando
          </v-btn>
          <v-spacer/>
          <v-btn color="grey darken-3" depressed dark @click="dialog = false">
            Agregar al Carro
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        



      </div>
    </v-card>
  </v-col>

</template>

<script lang="ts">
import Product from "@/models/Product"
import { Component, Prop, Vue } from "vue-property-decorator"

@Component({
  components: { }
})

export default class CardComponent extends Vue {
  @Prop() readonly product!: Product

  dialog: boolean = false
  amount: number = 0

}

</script>

<style>
.transparent {
  background: transparent;
}
</style>