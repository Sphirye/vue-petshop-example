<template>
  <v-app>
    <DrawerComponent/>
    <HeaderComponent/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import HeaderComponent from "@/components/HeaderComponent.vue"
import DrawerComponent from "@/components/DrawerComponent.vue"


@Component({
  components: { HeaderComponent, DrawerComponent }
})

export default class App extends Vue {

}

</script>

<style>
.transparent {
  background: transparent;
}
</style>
