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
         max-width="375"
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

      <!-- Content -->
      <v-col
        cols="12"
      >
        <v-row
          justify="center"
        >
          <!-- item Footer -->
          <v-col
            v-for="item in itemFooter"
            :key="item.id"
            cols="12"
            sm="12"
            md="4"
            lg="4"
          >
            <v-row
              no-gutters
              justify="center"
            >
              <!-- item Title -->
              <v-col
                cols="12"
              >
                <span class="text-h6 pl-3"> {{ item.title }} </span>
              </v-col>
              <!-- the items of item -->
              <v-col
                v-for="i in item.items"
                :key="i.id"
                cols="12"
              >
                <v-btn
                  text
                >
                  {{ i.title }}
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <!-- AsagoStudio - Years -->
      <v-col
        cols="12"
        class="d-flex justify-center"
      >
        <strong class="mr-2"> Asago Studio </strong> - <span class="ml-2">{{ Years }}</span>
      </v-col>

    </v-row>

  </v-footer>

</div>
</template>

<script>
export default {
  name: "BaseLayout",
  computed: {
    height() {
      return !(this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'xl')
    },
    Years() {
      return  new Date().getFullYear()
    }
  },
  data: () => ({
      drawer: false,

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

    // ITEM FOR FOOTER
    itemFooter: {
        // CUSTOMER
        customers:{
          title: 'Clients',
          items:{
            faq: {
              title: 'FAQ'
            },
            repayment:{
              title: 'Politique de remboursement'
            }
          }
        },
      // CONTACT
      contact: {
        title: 'Contact',
        items:{
          mail:{
            title: 'Adresse mail'
          },
          contact:{
            title: 'Formulaire de contact'
          }
        }
      },
      // ASAGO STUDIO
      asagoStudio: {
        title: 'Asago Studio',
        items:{
          mentionsLegal: {
            title: 'Mentions légale',
          },
          useConditions: {
            title: 'Conditions d\'utilisation',
          },
          order:{
            title: 'Politique de commande'
          }
        }
      }
    }
  }),
}
</script>

<style scoped>

</style>