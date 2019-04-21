<script lang="ts">
/* eslint-disable */
// Initialer
import Store from "../../stores/store"
import Filler from "../../components/Maintenance.vue"
import Footer from "../../components/Footer.vue"
import Vue from "vue"

export default Vue.extend({
  data() {
    return {
      globalData: Store.state,
      titleWebsite: `${Store.state.about.name} | Homepage`
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
    Filler,
    Footer
  }
});
</script>

<style src="../../assets/css/layout.css"></style>

<template>
  <div id="app" class="mx-auto d-flex h-100 flex-column">
    <!-- Meta Tags -->
    <title>{{titleWebsite}}</title>
    <meta name="author" :content="titleWebsite">
    <meta name="description" :content="globalData.ctx.main_text">

    <!-- Component -->
    <header class="mb-auto"></header>
    <Filler
      :main_text="`WEBSITE INI ENGGAK MAINTENANCE, INI CUMAN TEST PAGE DOANG`"
      :sub_text="globalData.ctx.sub_text"
      :discord_frame="globalData.social_media.discord.frame"
    />
    <Footer
      :project_name="globalData.about['name']"
      :corporate_name="globalData.about['corporate_name']"
      :project_year_start="globalData.about['project_year_start']"
      :socmed="getFooterSocmed()"
      :footer_color="globalData.about.footer_color"
    />

  </div>
</template>