function t(o){window.enmity.plugins.registerPlugin(o)}function s(o){return window.enmity.patcher.create(o)}var d="FreeAppIcons",w="1.0.0",c="Make the new Discord App Icons free.",r=[{name:"SerStars",id:"861631850681729045"}],u="#000001",a={name:d,version:w,description:c,authors:r,color:u};function i(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common,window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native,window.enmity.modules.common.React,window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const l=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function y(o){return window.enmity.assets.getIDByName(o)}const p=i("canUseAppIcons"),{ExperimentStore:g}=i("useAndTrackExposureToUserExperiment"),e=s("FreeAppIcons"),v={...a,onStart(){l.open({key:"TOAST",content:"Heya",icon:y("ic_raised_hand_24px")}),e.after(g,"getUserExperimentDescriptor",(o,[m],n)=>{if(m==="2023-08_custom_app_icons"&&(n==null?void 0:n.bucket))return{type:"user",revision:1,population:0,bucket:2680,override:!0}}),e.instead(p,"canUseAppIcons",(o,m,n)=>!0)},onStop(){e.unpatchAll()}};t(v);
