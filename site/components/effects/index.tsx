import { extend, useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { SSAOPass } from 'three/examples/jsm/postprocessing/SSAOPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

extend({ EffectComposer, ShaderPass, RenderPass, SSAOPass, UnrealBloomPass })

export default function Effects() {
    const composer = useRef<any>()
    const { scene, gl, size, camera } = useThree()
    const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [size])
    useEffect(() => {

        composer.current.setSize(size.width, size.height)

    }, [size])
    useFrame(() => composer.current.render(), 2)
    return (
        // <effectComposer ref={composer} args={[gl]}>
        //     <renderPass attachArray="passes" scene={scene} camera={camera} />
        //     {/* <sSAOPass attachArray="passes" args={[scene, camera]} kernelRadius={0.4} maxDistance={0.03} /> */}
        //     {/* <unrealBloomPass attachArray="passes" args={[aspect, 1.5, 1, 0.991]} /> */}
        //     <shaderPass
        //         attachArray="passes"
        //         args={[FXAAShader]}
        //         material-uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        //         renderToScreen
        //     />
        // </effectComposer>
        <></>
    )
}
