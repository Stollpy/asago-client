<template>
<div id="navigationDrawer">
  <!-- drawer navigation -->
  <v-navigation-drawer
      v-model="drawerActive"
      right
      temporary
      app
  >
    <v-list
        nav
        dense
    >
      <v-list-item-group>

        <!-- item top -->
        <v-list-item
            v-for="item in navigationDrawer.itemTop"
            :key="item.id"
        >
          <v-icon
          >
            {{ item.icon }}
          </v-icon>
          <span class="ml-2" > {{ item.title }} </span>
        </v-list-item>

        <v-divider></v-divider>

        <!-- item bottom -->

        <!-- item Shop -->
        <v-list-item class="mt-3">
          <v-icon>
            mdi-store
          </v-icon>
          <span class="ml-2" > Shop </span>
        </v-list-item>

        <!-- item size guide -->
        <v-list-item>
          <v-icon>
            mdi-television-guide
          </v-icon>
          <span class="ml-2" > Guide de taille </span>
        </v-list-item>

        <!-- item blog -->
        <v-list-item>
          <v-icon>
            mdi-post
          </v-icon>
          <span class="ml-2" > Blog </span>
        </v-list-item>

        <!-- item Menu -->
        <v-list-item
            v-for="item in navigationDrawer.itemBottom.menu"
            :key="item.id"
        >

          <v-menu
              rounded="b-xl"
              offset-y
              class="ml-0 pl-0"
          >

            <template v-slot:activator="{ attrs, on }" class="ml-0 pl-0">
              <div
                  :id="'menu'+item.id"
                  v-bind="attrs"
                  v-on="on"
              >
                <v-icon>
                  {{ item.icon }}
                </v-icon>
                <span class="ml-2" > {{ item.title }} </span>
              </div>
            </template>

            <v-list>
              <v-list-item
                  v-for="i in item.items"
                  :key="i.id"
              >
                <span> {{ i.title }} </span>
              </v-list-item>
            </v-list>
          </v-menu>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: "BaseLayoutNavigationDrawer",
  props: {
    drawer: {
      type: Boolean
    }
  },
  computed: {
    drawerActive: {
      get() {
        return this.drawer
      },
      set ( newDrawerActive ) {
        this.$emit( 'setDrawerActive', { data: newDrawerActive } )
      }
    }
  },
  data: () => ({
    // Data for Navigation Drawer
    navigationDrawer: {

      // ITEM TOP
      itemTop: {
        search: {
          title: 'Recherche',
          icon: 'mdi-magnify'
        },
        account: {
          title: 'Mon compte',
          icon: 'mdi-account'
        },
        cart: {
          title: 'Mon panier',
          icon: 'mdi-basket'
        }
      },

      // ITEM BOTTOM
      itemBottom: {

        // Menu
        menu: {
          // ENGAGEMENTS
          engagements : {
            title: 'Nos engagements',
            icon: 'mdi-earth',
            items: {
              ecology: {
                title: 'Ecologie',
              },
              transparent: {
                title: 'Transparence'
              }
            }
          },

          // ABOUT
          About: {
            title: 'A propos',
            icon: 'mdi-information',
            items:{
              AsagoStudio:{
                title: 'Asago Studio'
              },
              Founder: {
                title: 'Fondatrice'
              }
            }
          }
        },

      }
    },
  })
}
</script>

<style scoped>

</style>