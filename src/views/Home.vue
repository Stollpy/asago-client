<template>
  <base-layout>
      <template v-slot:nav-action v-if="height">
          <v-container>
            <v-row
                no-gutters
                justify="center"
            >

            </v-row>
          </v-container>
      </template>
  </base-layout>
</template>

<script>
  import BaseLayout from "../components/base/BaseLayout";
  export default {
    name: 'Home',

    components: {
      BaseLayout
    },

    computed: {
      height() {
        return (this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'xl')
      },
    },

    data: () => ({
      itemNavAction : {
        shop: {

        }
      }
    })
  }
</script>
