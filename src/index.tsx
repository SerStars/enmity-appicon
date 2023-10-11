import {Plugin, registerPlugin} from 'enmity/managers/plugins'
import {create} from 'enmity/patcher'
import manifest, {name as plugin_name} from '../manifest.json'
import {getByProps} from "enmity/modules"
// const use = getByProps("canUseAppIcons") // imagine canUseEverything LOL // saving this for future projects

// finally figured getbyprops out
const icons = getByProps("OFFICIAL_ALTERNATE_ICONS")
const iconsIds = getByProps("FreemiumAppIconIds")
let alternateIcons = icons.OFFICIAL_ALTERNATE_ICONS()

const Patcher = create('FreeAppIcons')

const FreeAppIcons: Plugin = {
    ...manifest,

//  when the app starts make the icons free for all/each of them
    onStart() {
        alternateIcons.forEach(icon => icon.isPremium = false)
        icons.ICONS.forEach(icon => { icon.isPremium = false });
        iconsIds.FreemiumAppIconIds = iconsIds.MasterAppIconIds;

    },

// unpach it all on stop   
    onStop() {
       Patcher.unpatchAll();
    }
 };

 registerPlugin(FreeAppIcons);
