function i(e){window.enmity.plugins.registerPlugin(e)}function s(e){return window.enmity.patcher.create(e)}var c="FreeAppIcons",p="1.0.0",a="Make the new Discord App Icons free.",u=[{name:"SerStars",id:"861631850681729045"}],m="#000001",d={name:c,version:p,description:a,authors:u,color:m};function t(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const l=t("canUseAppIcons"),{ExperimentStore:v}=t("useAndTrackExposureToUserExperiment"),n=s("FreeAppIcons"),w={...d,onStart(){n.after(v,"getUserExperimentDescriptor",(e,[o],r)=>{if(o==="2023-08_custom_app_icons"&&(r==null?void 0:r.bucket))return{type:"user",revision:1,population:0,bucket:1,override:!0}}),n.instead(l,"canUseAppIcons",(e,o,r)=>!0)},onStop(){n.unpatchAll()}};i(w);
