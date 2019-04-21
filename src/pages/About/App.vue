<script lang="ts">
/* eslint-disable */
// Initialer
import Store from "../../stores/store"
import Profile from "../../components/Profile.vue"
import Footer from "../../components/Footer.vue"
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      globalData: Store.state,
      titleWebsite: `${Store.state.about.name} | About Us`
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
    Profile,
    Footer
  }
});
</script>

<style src="../../assets/css/layout.css"></style>

<template>
  <div id="app" class="mx-auto d-flex h-100 flex-column">
    <!-- Meta Tags -->
    <title>{{globalData.about.name}} | About Us</title>
    <meta name="author" :content="`${globalData.about.name} | About Us`">
    <meta name="description" :content="globalData.ctx.main_text">

    <!-- Component -->
    <header class="mb-auto"></header>
    <Profile/>

    <Footer
      :project_name="globalData.about['name']"
      :corporate_name="globalData.about['corporate_name']"
      :project_year_start="globalData.about['project_year_start']"
      :socmed="getFooterSocmed()"
      :footer_color="globalData.about.footer_color"
    />

  </div>
</template>