varying vec3 vNormal;
uniform sampler2D uTexture;
varying vec2 vUV;
uniform vec2 uMouse;
varying vec3 vPos;
uniform vec2 uResolution;
void main() {
    vec4 fragColor = texture2D(uTexture,vUV);
    gl_FragColor= fragColor;
    // gl_FragColor= vec4(1.0,0.,0.,1.0);
}