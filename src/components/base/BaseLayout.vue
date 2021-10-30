<template>
<div id="baseLayout">

  <!-- drawer navigation -->
  <base-layout-navigation-drawer @setDrawerActive="setDrawerActive" :drawer="getDrawerActive" />

  <!-- App bar -->
  <base-layout-app-bar :drawer="getDrawerActive" @setDrawerActive="setDrawerActive" />

  <!-- Content -->
  <v-main>
    <v-container
        fluid
    >
      <v-row
        no-gutters
        justify="center"
        class="mt-0"
      >
        <!-- Logo -->
        <v-img
         :src="require('../../assets/core/Logo1.png')"
         max-width="375"
         @click="redirectHome()"
        />

        <v-col
            slot="nav-end"
            cols="12"
        >

          <!-- Nav action for the view home -->
          <slot name="nav-action"></slot>

        </v-col>

      </v-row>
    </v-container>
    <!-- content component -->
    <slot />
  </v-main>

  <!-- Footer  -->
  <base-layout-footer />

</div>
</template>

<script>
import BaseLayoutFooter from "./BaseLayoutFooter";
import BaseLayoutNavigationDrawer from "./BaseLayoutNavigationDrawer";
import BaseLayoutAppBar from "./BaseLayoutAppBar";

export default {
  name: "BaseLayout",
  components: {
    BaseLayoutFooter,
    BaseLayoutNavigationDrawer,
    BaseLayoutAppBar
  },
  data: () => ({
    drawer: false,
  }),
  computed: {
    getDrawerActive(){
      return this.drawer
    }
  },
  methods: {
    setDrawerActive ( drawer ) {
     this.drawer = drawer.data;
    },
    redirectHome () {
      if ( this.$route.path !== '/' ) {
        this.$router.push( { path: '/' } )
      }
    }
  },
}
</script>

<style scoped>

</style>