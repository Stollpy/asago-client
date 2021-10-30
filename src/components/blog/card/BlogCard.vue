<template>
<div class="cardBlog">
  <v-card
    class="mx-auto"
    max-width="400"
    rounded="lg"
  >
    <v-img
        :src="blog.image"
        class="white--text align-end"
        height="200px"
    >
      <v-card-title>{{ blog.title }}</v-card-title>
    </v-img>
    <v-row
      justify="start"
      align="center"
    >
      <v-chip
          color="primary"
      >
        Category
      </v-chip>
    </v-row>
    <v-card-text>
      <div>
        {{ blog.content.substring(0, 200) + ' ...' }}
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        rounded="pill"
        color="primary"
      >
        Aller voir
      </v-btn>
    </v-card-actions>
  </v-card>
</div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    blog: {
      type: Object
    }
  }
}
</script>

<style scoped>

</style>