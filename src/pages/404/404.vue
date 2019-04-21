<script lang="ts">
/* eslint-disable */
// Initialer
import Store from "../../stores/store"
import Footer from "../../components/Footer.vue"
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      globalData: Store.state,
      titleWebsite: `${Store.state.about.name} | Not Found`
    };
  },
  methods: {
    getFooterSocmed(): Object {
      let x = Store.state.social_media;
      return {
        fb: x.facebook,
        twit: x.twitter,
        ig: x.instagram,
        yt: x.youtube,
        dc: x.discord.invite
      };
    }
  },
  components: {
    Footer
  }
});
</script>

<style src="../../assets/css/layout.css"></style>

<template>
  <main>
    <div id="app" class="mx-auto d-flex h-100 flex-column">
      <!-- Meta Tags -->
      <title>{{globalData.about.name}} | Not Found</title>
      <meta name="author" :content="`${globalData.about.name} | Not Found`">
      <meta name="description" :content="`It seems like you've stumbled upon 404.`">

      <!-- Component -->
      <header class="mb-auto"></header>
      <Footer
        :project_name="globalData.about['name']"
        :corporate_name="globalData.about['corporate_name']"
        :project_year_start="globalData.about['project_year_start']"
        :socmed="getFooterSocmed()"
        :footer_color="globalData.about.footer_color"
      />

    </div>
  </main>
</template>
