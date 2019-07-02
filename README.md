
# Vue Profile Picture

**Lightweight vue component** to render the **user picture** or his **name initials** It's easy to customize with your style and change the behavior using the properties of the component.

## Instalation

**To install the package in your project you can type:**

- npm i @luanedcosta/vue-profile-picture
- yarn add @luanedcosta/vue-profile-picture
- Or download it from the repository: <https://github.com/LuanEdCosta/vue-profile-picture>

**Once installed you can use the component as a plugin:**

There's no options, so you can ignore the second parameter of `Vue.use()`

```javascript
import VueProfilePicture from '@luanedcosta/vue-profile-picture'

Vue.use(VueProfilePicture)
```

**Or you can import the component locally:**

```javascript
import { VueProfilePicture } from '@luanedcosta/vue-profile-picture'

export default {
    components: { VueProfilePicture }
}
```

## Simple Usage

If exists an image the component will render a `<img>` tag. If the user doesn't have an image his initials will appear in place of the image.

```html
<vue-profile-picture name="Username" img="Image src"/>
```

## Props

The table below contains all component props.

Property | Type | Default | Required | Explanation
------------ | ------------ | ------------ | ------------ | ------------
name | String |  | true | Name of the user
classes | String | null | false | HTML class property for the `<img>` tag or `<div>` with the initials
styles | Object | null | false | HTML style property for the `<img>` tag or `<div>` with the initials
noStyle | Boolean | false | false | Remove all default component classes to allow you to define your own css classes
numOfInitials | Number | 2 | false | Number of letters that will appear with the user doesn't have image
nameSeparator | String | white space | false | Character or string that separates each user name
transform | Number | 1 | false | 1 = Initials uppercase; 2 = Initials lowercase; 0 = Don't transform the text
firstName | Boolean | false | false | The component will show only the firstname initials
lastName | Boolean | false | false | The component will show only the lastname initials
def | String | '-' | false | If the component didn't find an image neither the user name the component will display this property value on screen
img | String | null | false | The *src* for the image. The same as the *src* property of the `<img>` tag
alt | String | null | false | The same as *alt* property of the `<img>` tag
draggable | String | "true" | false | If *true* the image can be draggable
