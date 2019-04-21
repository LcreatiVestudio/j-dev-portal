// resolveJsonConfig
import Vue from 'vue'
import Vuex from 'vuex'
import * as AboutConfig from "../config/about.json"
import * as SocialConfig from "../config/social_media.json"
import * as CtxMaintenanced from "../config/content.json"
import * as ProjectMeta from "../../package.json"

function ArrayList(obj: Object): Array<String> {
  const result: Array<String> = new Array()
  const keys: Array<String> = Array.from(Object.keys(obj))
  const values: Array<String> = Array.from(Object.values(obj))
  keys.forEach((k_element: String, k_index: Number) => {
    values.forEach((v_element: String, v_index: Number) => {
      if (k_index === v_index) {
        result.push(`${k_element}: ${v_element}`)
      }
    })
  })
  return result
}

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Start fill the information here
    // Project metadata
    project_meta: {
      name: ProjectMeta["name"],
      version: ProjectMeta["version"],
      description: ProjectMeta["description"],
      author: ArrayList(ProjectMeta["author"]),
      scripts: ArrayList(ProjectMeta["scripts"]),
      dependencies: ArrayList(ProjectMeta["dependencies"]),
      dev_dependencies: ArrayList(ProjectMeta["devDependencies"]),
      browserlist: ProjectMeta["browserslist"]
    },
    // About project
    about: {
      name: AboutConfig["project_name"],
      corporate_name: AboutConfig["company_name"],
      project_year_start: AboutConfig["project_year_start"],
      footer_color: AboutConfig["footer_color"] || "#4c4c4c"
    },
    // The Social Media
    social_media: {
      discord: {
        frame: SocialConfig["discord"]["frame"],
        invite: SocialConfig["discord"]["invite"]
      },
      facebook: SocialConfig["facebook"],
      twitter: SocialConfig["twitter"],
      instagram: SocialConfig["instagram"],
      youtube: SocialConfig["youtube"],
    },
    ctx: {
      main_text: CtxMaintenanced["main_text"],
      sub_text: CtxMaintenanced["sub_text"]
    }
  }
})
