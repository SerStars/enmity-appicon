import { Plugin, registerPlugin } from 'enmity/managers/plugins'
import manifest from '../manifest.json'
import { getByProps } from "enmity/modules"

// finally figured getbyprops out
const icons = getByProps("OFFICIAL_ALTERNATE_ICONS")
const iconsIds = getByProps("FreemiumAppIconIds")
const alternateIcons = icons.OFFICIAL_ALTERNATE_ICONS();
const origFreemiumAppIconIds = iconsIds.FreemiumAppIconIds;

const FreeAppIcons: Plugin = {
    ...manifest,

//  when the app starts make the icons free for all/each of them
    onStart() {
        alternateIcons.forEach(icon => (icon._isPremium = icon.isPremium, icon.isPremium = false));
        icons.ICON.forEach(icon => (icon._isPremium = icon.isPremium, icon.isPremium = false));
        iconsIds.FreemiumAppIconIds = iconsIds.MasterAppIconIds;
    },

// unpach it all on stop   
    onStop() {
        alternateIcons.forEach(icon => (icon._isPremium = icon.isPremium, icon.isPremium = true));
        icons.ICON.forEach(icon => (icon._isPremium = icon.isPremium, icon.isPremium = true));
        iconsIds.FreemiumAppIconIds = iconsIds.MasterAppIconIds;
    }
 };
 
 registerPlugin(FreeAppIcons);
