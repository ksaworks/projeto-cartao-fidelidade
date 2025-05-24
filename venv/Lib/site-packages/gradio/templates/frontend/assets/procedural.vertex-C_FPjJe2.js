import{j as o}from"./index-Cb4A4-Xi.js";import"./index-Ccc2t4AG.js";import"./svelte/svelte.js";const e="proceduralVertexShader",i=`attribute vec2 position;varying vec2 vPosition;varying vec2 vUV;const vec2 madd=vec2(0.5,0.5);
#define CUSTOM_VERTEX_DEFINITIONS
void main(void) {
#define CUSTOM_VERTEX_MAIN_BEGIN
vPosition=position;vUV=position*madd+madd;gl_Position=vec4(position,0.0,1.0);
#define CUSTOM_VERTEX_MAIN_END
}`;o.ShadersStore[e]||(o.ShadersStore[e]=i);const n={name:e,shader:i};export{n as proceduralVertexShader};
//# sourceMappingURL=procedural.vertex-C_FPjJe2.js.map
