<template>
  <div>
  <Products :products="products" :error="error" />
  <!-- <Categories :categories="categories" :error="error" :storeUrl="storeUrl" />-->
  </div>
</template>

<script>
import Products from "~/components/Products.vue"
// import Categories from "~/components/Categories.vue"

export default {
  data() {
    return {
      //categories: [],
      data: null,
      products: [],
      //storeUrl: process.env.storeUrl,
      error: null
    }
  },
  async mounted() {
    try {
   //   this.categories = await this.$strapi.find('categories')
      this.services = await this.$strapi.$services.find()
     // this.data = await this.$strapi.$homepage.find()
    } catch (error) {
      this.error = error
    }
  },
  components: {
    Products
  }
}
</script>
