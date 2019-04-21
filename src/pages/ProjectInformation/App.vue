<script lang="ts">
/* eslint-disable */
// Initialer
import Store from "../../stores/store"
import Profile from "../../components/Profile.vue"
import Footer from "../../components/Footer.vue"
import Vue from "vue"

function VForIfy(obj: Array<String>): Array<Object> {
  const result: Array<Object> = new Array()
  obj.forEach((element: String, index: Number) => {
    const data: Object = {
      index: index,
      text: element
    }
    result.push(data)
  })
  return result
}

export default Vue.extend({
  data() {
    return {
      globalData: Store.state,
      scripts: VForIfy(Store.state.project_meta["scripts"]),
      author: VForIfy(Store.state.project_meta["author"]),
      dependencies: VForIfy(Store.state.project_meta["dependencies"]),
      dev_dependencies: VForIfy(Store.state.project_meta["dev_dependencies"]),
      compatibility: VForIfy(Store.state.project_meta["browserlist"]),
      titleWebsite: `${Store.state.about.name} | Project Information`,
      descWebsite: `Display this project core information.`
    };
  },
  methods: {
    getFooterSocmed(): Object {
      let x = Store.state.social_media
      return {
        fb: x.facebook,
        twit: x.twitter,
        ig: x.instagram,
        yt: x.youtube,
        dc: x.discord.invite
      }
    }
  },
  components: {
    Footer
  }
});
</script>

<style src="../../assets/css/projectinformation.css"></style>

<template>
  <div id="app" class="mx-auto d-flex h-100 flex-column">
    <!-- Meta Tags -->
    <title>{{titleWebsite}}</title>
    <meta name="author" :content="titleWebsite">
    <meta name="description" :content="descWebsite">

    <!-- Component -->
    <header class="mb-auto"></header>
    <div class="container">
      <div class="section">
        <img class="profile" src="../../assets/images/lsvblog-icon.png">
        <h3 class="section-heading">package.json</h3>
        <p class="section description">This page contains every information imported directly from package.json.</p>
        <div class="list row">
          <ul>
            <li>Project Name: {{globalData.project_meta["name"]}} </li>
            <li>Project Description: {{globalData.project_meta["description"]}} </li>
            <li>Project Version: {{globalData.project_meta["version"]}} </li>
            <li>Project Author: 
              <ul>
                <li v-for="(element, index) in author" :key="index">
                  {{element.text}}
                </li>
              </ul>
            </li>
            <li>Project Scripts:
              <ul>
                <li v-for="(element, index) in scripts" :key="index">
                  {{element.text}}
                </li>
              </ul>
            </li>
            <li>Project Dependencies:
              <ul>
                <li v-for="(element, index) in dependencies" :key="index">
                  {{element.text}}
                </li>
              </ul>
            </li>
            <li>Project Development Dependencies:
              <ul>
                <li v-for="(element, index) in dev_dependencies" :key="index">
                  {{element.text}}
                </li>
              </ul>
            </li>
            <li>Project Compatibility: 
              <ul>
                <li v-for="(element, index) in compatibility" :key="index">
                  {{element.text}}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer
      :project_name="globalData.about['name']"
      :corporate_name="globalData.about['corporate_name']"
      :project_year_start="globalData.about['project_year_start']"
      :socmed="getFooterSocmed()"
      :footer_color="globalData.about.footer_color"
    />

  </div>
</template>