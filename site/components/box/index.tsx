import { useFrame } from '@react-three/fiber';
import { ReactElement, useRef } from 'react';
const vs = require("./shader.vert").default;
const fs = require("./shader.frag").default;

interface Props {

}

function Box({ }: Props): ReactElement {
    const mesh: any = useRef();
    const geom: any = useRef();
    const shader: any = useRef();
    let r: number = 0.01;

    const uniforms: any = {
        time: { type: 'f', value: 0.0 }
    }

    useFrame(({ clock }) => {
        uniforms.time.value = clock.elapsedTime;
        shader.current.uniforms.time.needsUpdate = true;
    })


    return (
        <mesh ref={mesh}>
            <sphereBufferGeometry ref={geom} args={[5, 150, 150]} />
            <shaderMaterial ref={shader} uniforms={uniforms} vertexShader={vs} fragmentShader={fs} />
        </mesh>
    )
}

export default Box
