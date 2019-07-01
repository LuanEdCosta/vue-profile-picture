<template>
    <div 
        :class="{ 'user-profile': !anyStyle }"
        @click="emitClick">
        <img 
            :class="[{ 'user-profile-picture': !anyStyle }, classes]"
            :style="styles"
            v-if="img && img.trim()" 
            :src="img"
            :alt="alt"
            :draggable="draggable">

        <div 
            :class="[{ 'user-profile-default': !anyStyle }, classes]"
            :style="styles"
            v-else>
            <span>{{ getNameInitials }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vue-profile-image',
    props: {
        //GENERAL PROPS ------------------------------------------------------
        classes: { type: String, default: null },
        styles: { type: Object, default: null },
        anyStyle: { type: Boolean, default: false },

        //NAME PROPS ---------------------------------------------------------
        name: String,
        nomOfInitials: { type: Number, default: 2 },
        nameSeparator: { type: String, default: ' ' },
        transform: { type: Number, default: 1 },
        firstName: { type: Boolean, default: false },
        lastName: { type: Boolean, default: false },

        //IMAGE PROPS --------------------------------------------------------
        def: { type: String, default: '-' },
        img: { type: String, default: null },
        alt: { type: String, default: null },
        draggable: { type: String, default: "true" },
    },
    computed: {
        //Get the initials of the name setted in props
        getNameInitials(){
            if(this.name && this.name.trim()){
                let initials = this.getLettersFromArray()
                
                switch(this.transform){
                    case 0: return initials.toLowerCase()
                    case 1: return initials.toUpperCase()
                }
                
                return initials
            }
            return this.def
        },
    },
    methods: {
        //get the letters from the name array
        getLettersFromArray(){
            let nameArray = this.name.trim().split(this.nameSeparator)
            let initials = ''

            if(nameArray.length > 1){
                if(this.firstName){
                    nameArray = [ nameArray[0] ];
                }else if(this.lastName){
                    nameArray = [ nameArray[nameArray.length -1] ]
                }
            }

            nameArray.forEach(name => {
                const nameLetterArray = name.split('')
                if(nameArray.length === 1){ //String contains only one name
                    const nomOfInitials = name.length < this.nomOfInitials ? name.length : this.nomOfInitials
                    for (let i = 0; i < nomOfInitials; i++) {
                        initials += nameLetterArray[i]
                    }
                }else{ //String contains many names
                    if(initials.length < this.nomOfInitials){
                        initials += nameLetterArray[0]
                    }
                }
            });

            return initials
        },
        emitClick(event){
            this.$emit('click', event)
        }
    }
}
</script>

<style lang="scss">
$configs: (
    vpi_image_size: 100px,
    vpi_radius: 100%
);

@import "@luanedcosta/sassutility/dist/scss/utility.scss";

$vpi_image_shadow: -1px 1px 4px 1px black_rgba(.3);

.user-profile{
    .user-profile-picture{
        @extend %no-selection;
        @include radius(get_config(vpi_radius));
        @include b-shadow($vpi_image_shadow);
        @include size(get_config(vpi_image_size));
    }
    .user-profile-default{
        @extend %no-selection;
        @include size(get_config(vpi_image_size));
        @include radius(get_config(vpi_radius));
        @include display(table);
        @include b-shadow($vpi_image_shadow);
        @include t-align(center);
        @include font(black, 21px, bold);
        @include color-bg(null, grey_scale(95));
        span{
            @extend %vert-middle;
            @include display(table-cell);
        }
    }
}
</style>
