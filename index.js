import VueProfilePicture from "@/VueProfilePicture"

export default {
    VueProfilePicture,
    
    install(Vue) {
        Vue.component("vue-profile-picture", VueProfilePicture)
    }
}

