<template>
<div id="baseLayout">

  <!-- drawer navigation -->
  <v-navigation-drawer
      v-model="drawer"
      right
      temporary
      app
  >
    <v-list
        nav
        dense
    >
      <v-list-item-group>

        <!-- item search -->
        <v-list-item>
          <v-icon
          >
            mdi-magnify
          </v-icon>
          <span> Recherche </span>
        </v-list-item>

        <!-- item account -->
        <v-list-item>
          <v-icon
          >
            mdi-account
          </v-icon>
          <span> Mon compte </span>
        </v-list-item>

        <!-- item cart -->
        <v-list-item>
          <v-icon
          >
            mdi-cart
          </v-icon>
          <span> Panier </span>
        </v-list-item>

      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

  <!-- App bar -->
  <v-app-bar
      app
      color="primary"
      dark
  >
    <!-- left app bar -->

    <!-- icon social network -->
    <v-btn
        v-for="icon in iconSocialNetwork"
        :key="icon.id"
        icon
        text
        :href="icon.href"
    >
      <v-icon
      >
        {{ icon.icon }}
      </v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <!-- right app bar -->

    <!-- breakpoint xs or sm or md -->

      <!-- Icon menu -->
      <v-app-bar-nav-icon
          v-if="height"
          @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

    <!-- breakpoint lg or xl -->
    <div
        v-else
    >
      <!-- Icon break point lg or xl -->
      <v-btn
          v-for="icon in iconBreakPointLgXl"
          :key="icon.id"
          text
          icon
      >
        <v-icon
        >
          {{ icon }}
        </v-icon>
      </v-btn>

    </div>
  </v-app-bar>

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

        <v-img
         :src="require('../../assets/core/Logo1.png')"
         max-width="400"
        />

        <v-col
            slot="nav-end"
            cols="12"
        >

          <!-- Nav action for the view home -->
          <slot name="nav-action"></slot>

        </v-col>

      </v-row>
      <!-- content component -->
      <slot />
    </v-container>
  </v-main>

  <!-- Footer  -->
  <v-footer
    color="secondary"
    app
  >

    <!-- Content footer -->
    <v-row
      justify="center"
    >

    </v-row>

  </v-footer>

</div>
</template>

<script>
export default {
  name: "BaseLayout",
  data: () => ({
      drawer: false,
      iconBreakPointLgXl : {
        search: 'mdi-magnify',
        account: 'mdi-account',
        cart: 'mdi-cart'
      },
      iconSocialNetwork : {
        instagram : {
          href: "https://www.instagram.com/asagostudio/",
          icon: 'mdi-instagram'
        },
        pinterest: {
          href: "https://www.pinterest.fr/pin/1077134435847266084/",
          icon: 'mdi-pinterest'
        }
      }
  }),
  computed: {
    height() {
      return !(this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'xl')
    }
  }
}
</script>

<style scoped>

</style>