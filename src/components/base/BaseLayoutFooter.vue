<template>
<div id="footer">
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
  name: "BaseLayoutFooter",
  computed: {
    Years() {
      return  new Date().getFullYear()
    }
  },
  data: () => ({
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
  })
}
</script>

<style scoped>

</style>