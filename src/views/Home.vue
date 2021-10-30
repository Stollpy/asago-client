<template>
  <base-layout>
      <template v-slot:nav-action v-if="height">
          <v-container>
            <v-row
                no-gutters
                justify="center"
                align="center"
            >
              <!-- simple -->
             <v-col
                v-for=" itemNavigation in filter( 'simple', itemNavAction )"
                :key="itemNavigation.id"
                cols="2"
                class="text-center"
             >
               <v-btn
                text
                class="text-center"
               >
                 <span> {{ itemNavigation.title }} </span>
               </v-btn>
             </v-col>
              <!-- select -->
              <v-col
                  v-for=" itemNavigation in filter( 'select', itemNavAction )"
                  :key="itemNavigation.id"
                  cols="2"
              >
                <v-menu
                    rounded="b-xl"
                    offset-y
                    class="ml-0 pl-0"
                >

                  <template v-slot:activator="{ attrs, on }" class="ml-0 pl-0">
                    <div
                        :id="'menu'+itemNavigation.id"
                        v-bind="attrs"
                        v-on="on"
                        class="text-center"
                    >
                      <v-btn
                        text
                      >
                        <span class="ml-2" > {{ itemNavigation.title }} </span>
                      </v-btn>
                    </div>
                  </template>

                  <v-list>
                    <v-list-item
                        v-for="i in itemNavigation.children"
                        :key="i.id"
                    >
                      <span> {{ i.title }} </span>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
            </v-row>
          </v-container>
      </template>
    <!-- Image presentation Home -->
    <v-img
        :src="require('@/assets/home/imageHome.png')"
        max-height="300"
        class="mt-5"
    ></v-img>

  <v-container>
    <!-- Section New and Store -->
    <v-row
        justify="center"
        align="center"
        no-gutters
        class="mt-14"
    >
      <!-- Col New -->
      <v-col
          class="text-center mt-5"
          cols="12"
          sm="12"
          md="6"
          lg="6"
      >
        <!-- Content col new -->
        <v-row
            justify="center"
            align="center"
            no-gutters
        >
          <!-- Img col new -->
          <v-col
              cols="12"
              class="d-flex justify-center"
          >
            <v-img
                :src="require('@/assets/home/imgSelfie.png')"
                max-height="300"
                max-width="300"
                class="rounded-lg"
            ></v-img>

          </v-col>
          <!-- Btn col new -->
          <v-col
              class="mt-8"
          >
            <v-btn
                color="secondary"
                large
                class="rounded-pill"
            >
              <span> Nouveautés </span>
            </v-btn>
          </v-col>
        </v-row>

      </v-col>
      <!-- Col Store -->
      <v-col
          class="text-center mt-5"
          cols="12"
          sm="12"
          md="6"
          lg="6"
      >

        <!-- Content col store -->
        <v-row
            justify="center"
            align="center"
            no-gutters
        >
          <!-- Img col store -->
          <v-col
              cols="12"
              class="d-flex justify-center"
          >
            <v-img
                :src="require('@/assets/home/imgDessous.jpg')"
                max-height="300"
                max-width="300"
                class="rounded-lg"
            ></v-img>

          </v-col>
          <!-- Btn col store -->
          <v-col
              class="mt-8"
          >
            <v-btn
                color="secondary"
                large
                class="rounded-pill"
            >
              <span> Boutique </span>
            </v-btn>
          </v-col>
        </v-row>

      </v-col>
    </v-row>

    <!-- Text Asago -->
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="mt-16"
    >
      <!-- col text asago -->
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="asago-text">
          " Asago Studio c'est l'amour de la <strong> mode fait-main </strong> mais c'est aussi une
          <span class="font-weight-bold"> communauté </span> de femme <span class="font-weight-bold" > positive </span>, qui veulent se sentir bien dans leur
          corps avec une <strong> étique écologique</strong>. "
        </p>
      </v-col>

    </v-row>

    <!-- col illustration -->
    <v-col
        cols="12"
        class="d-flex justify-center"
    >
      <v-img
          :src="require('@/assets/home/canva.png')"
      ></v-img>
    </v-col>

    <!-- Col About -->
    <v-row
      no-gutters
      justify="center"
      align="center"
    >

      <!-- Col img -->
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
      >
        <v-img
          :src="require('@/assets/home/imgEscalator.jpg')"
          class="rounded-xl"
          max-height="500"
          max-width="500"
        ></v-img>
      </v-col>

      <!-- Col Text -->
      <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
      >
        <v-row
          no-gutters
          justify="center"
          align="center"
        >
          <v-col
            cols="12"
          >
            <p
                class="text-about-home mt-14"
            >
              Pourquoi j'ai créer <strong> Asago Studio </strong> ?
            </p>
            <p
                class="text-about-home mt-14"
            >
              En <span class="font-weight-bold" > Décembre 2020 </span> me retrouvant sans
              étude, je me suis lancer un <span class="font-weight-bold" > défie </span> et si je
              contribuais à <span class="font-weight-bold"> mon échelle </span> à <strong> diminuer
              l’impacte écologique </strong> de l’industrie du
              textile.
            </p>
            <p
                class="text-about-home mt-14"
            >
              <strong> Asago </strong> à donc vue le jour, au départ <strong> Asago </strong>
              était une ...
            </p>
          </v-col>
        </v-row>
        <!-- Button "lire plus" -->
        <v-row
          no-gutters
          justify="center"
          align="center"
          class="mt-5"
        >
          <v-col
            cols="12"
            class="text-center"
          >
            <v-btn
                class="rounded-pill"
                large
                color="secondary"
            >
              <span> Lire plus </span>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Opinion Asago -->
    <v-row
      no-gutters
      justify="center"
      align="center"
      class="mt-16"
    >
      <!-- Col title Opinion -->
      <v-col
        cols="12"
        class="text-center mt-16"
      >
        <h2 class="text-h5 font-weight-bold">
          Vos avis
        </h2>
      </v-col>

      <!-- Col carousel opinion -->
      <v-carousel
          class="mt-8"
          :continuous="false"
          height="300"
          show-arrows-on-hover
          hide-delimiter-background
          delimiter-icon="mdi-circle"
      >
        <v-carousel-item
            v-for="(arrayOpinion, index) in avisFormat( opinions )"
            :key="index"
        >
          <v-row
            no-gutters
            justify="center"
            align="center"
          >
            <!-- Content carousel opinion -->
            <v-col
                v-for="(opinion, index) in arrayOpinion"
                :key="index"
                :cols="12/arrayOpinion.length"
            >
              <!-- opinion -->
              <v-list-item two-line class="text-center">
                <v-list-item-content>
                    {{ opinion.content }}
                  <v-list-item-subtitle>
                    - {{ opinion.author.fullname }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>

        </v-carousel-item>
      </v-carousel>
    </v-row>

    <!-- row illu -->
    <v-row
      no-gutters
      justify="center"
      align="center"
    >
      <!-- display img given by email -->
    </v-row>

    <!-- row form for follow newsletter -->
    <v-row
      no-gutters
      justify="center"
      align="center"
    >
      <!-- title form -->
      <v-col
        cols="12"
        class="text-center"
      >
        <h3 class="text-h4 title-font-form-newsletter font-weight-bold">
          Un article du blog Asago
        </h3>
        <h3 class="text-h4">
          encore mieux qu'une lettre d'amour
        </h3>

      </v-col>

      <!-- form content -->
      <v-col>
        <!-- add constraint with vee-validate -->
        <v-text-field
            class="input-newsletter"
            placeholder="Entre ton e-mail"
        ></v-text-field>

        <v-row
            class="mt-3"
          justify="center"
          align="center"
        >
          <v-btn
              rounded="pill"
              color="secondary"
              large
          >
            S'abonner
          </v-btn>
        </v-row>
      </v-col>
    </v-row>

    <!-- row for the articles of blog -->
    <v-row
      class="mt-10"
      justify="center"
      align="center"
    >
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        v-for="(blog, index) in blogs"
        :key="index"
      >
        <blog-card
          :blog="blog"
        >
        </blog-card>
      </v-col>
    </v-row>
  </v-container>
  </base-layout>
</template>

<script>
  import BaseLayout from "../components/base/BaseLayout";
  import {mapState} from 'vuex';
  import BlogCard from "../components/blog/card/BlogCard";
  export default {
    name: 'Home',

    components: {
      BaseLayout,
      BlogCard
    },

    computed: {
      ...mapState([
          'opinions',
          'blogs'
      ]),
      height() {
        return (this.$vuetify.breakpoint.name === 'lg' || this.$vuetify.breakpoint.name === 'xl')
      },
    },
    data: () => ({
      itemNavAction : [
        {
            title: 'Shop',
            display: 'simple'
        },
        {
          title: 'Guide de taille',
          display: 'simple'
        },
        {
          title: 'Blog',
          display: 'simple'
        },
        {
          title: 'A propos',
          display: 'select',
          children: {
            asagoStudio: {
              title: 'Asago Studio'
            },
            founder: {
              title: 'Fondatrice'
            }
          }
        },
        {
          title: 'Nos engagements',
          display: 'select',
          children: {
              ecologie: {
                title: 'Ecologie'
              },
            transparency: {
                title: 'transparence'
            }
          }
        }
      ]
    }),
    methods: {
      test ( test ) { console.log ( test ) },
      filter ( filtered , array ) {
        return array.filter( ( x ) => x.display === filtered )
      },
      avisFormat ( avis ) {
        // if this.height is equal a true, so ...
        if ( this.height ) {

          let avisArray = [];
          // for 3
          for ( let i = 0; i < 3; i++ ) {
            // if i is equal a 0, so..
            if ( i === 0 ) {
              // use a new index in the array avisArray
              avisArray[0] = [];
              // for 3
              for ( let t = 0; t < 3; t++ ) {
                // push in the array avisArray the tree first opinion
                avisArray[0].push ( avis[t] );
              }
              // else if i is equal a one, so ...
            }else if ( i === 1 ) {
              // use a new index in the array avisArray
              avisArray[1] = [];
              for ( let t = 0; t < 3; t++ ) {
                // push in the array avisArray the opinions with a index t*2
                avisArray[1].push ( avis[t*2] );
              }
            } else {
              // else, push the lasted opinion of array avisArray
              avisArray[2] = [];
              avisArray[2].push ( avis[7] );
              avisArray[2].push ( avis[8] );
              avisArray[2].push ( avis[9] );
            }
          }
          console.log(avisArray)
          return avisArray;

        }else{
          // declared new array for stock avis
          let avisArray = [];
          // for of 9
          for ( let i = 0; i < 9; i++ ) {
            // declared a new index in the array avisArray
            avisArray[i] = [];
            // push the opinion in the new index of avisArray
            avisArray[i].push ( avis[i] );

          }
          return avisArray;
        }

      }
    }
  }
</script>
<style lang="css" scoped>

.asago-text{
font-size: 1.6em;
}

.text-about-home {
  font-size: 1.5rem;
}

@media (max-width: 960px) {
  .asago-text{
    font-size: 1.2em;
  }

  .text-about-home {
    font-size: 1.2rem;
  }
}
</style>