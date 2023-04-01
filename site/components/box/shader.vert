
varying vec3 vNormal;
uniform float time;

void main(){
   vNormal = normal;

   vec3 newPos = position + vec3(sin((time*4.)+position.y*2.)*normal.x/10.,0.,sin(time*4.+position.y*2.)*normal.z/10.);

    vec4 modelViewPosition = modelViewMatrix * vec4(newPos, 1.0);
    gl_Position = projectionMatrix * modelViewPosition; 
}