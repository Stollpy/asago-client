<template>
<div id="appBar">
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
        @click.stop="setDrawerActive( getDrawerActive )"
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
</div>
</template>

<script>
export default {
  name: "BaseLayoutAppBar",
  props: {
    drawer: {
      type: Boolean
    }
  },
  computed: {
    getDrawerActive() {
      return this.drawer;
    },
    height() {
      return !(this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'xl')
    },
  },
  methods: {
    setDrawerActive ( drawer ) {
      this.$emit( 'setDrawerActive', { data: !drawer } )
    }
  },
  data: () => ({

    // Icon for the break points lg and xl
    iconBreakPointLgXl : {
      search: 'mdi-magnify',
      account: 'mdi-account',
      cart: 'mdi-cart'
    },

    // Icon for the socials networks
    iconSocialNetwork : {
      // INSTA
      instagram : {
        href: "https://www.instagram.com/asagostudio/",
        icon: 'mdi-instagram'
      },
      // PINTEREST
      pinterest: {
        href: "https://www.pinterest.fr/pin/1077134435847266084/",
        icon: 'mdi-pinterest'
      }
    },
  })
}
</script>

<style scoped>

</style>