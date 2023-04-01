varying vec3 vNormal;
void main() {
    vec3 light = vec3(0.5,0.2,1.0);
    light = normalize(light)*2.0;
    float dProd = dot(vNormal,light);
    gl_FragColor = vec4(vec3(dProd*vec3(0.5,0.0,0.3)), 1.);
    // gl_FragColor=vec4(d,1.0);
}