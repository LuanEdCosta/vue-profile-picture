import ProfilePicture from "./src/VueProfilePicture"

export const VueProfilePicture = ProfilePicture

export default {
    install(Vue) {
        Vue.component("vue-profile-picture", VueProfilePicture)
    }
}