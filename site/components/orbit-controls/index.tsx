import { extend, Object3DNode, useThree } from '@react-three/fiber';
import React, { ReactElement, useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

declare global {
    namespace JSX {
        interface IntrinsicElements {
            orbitControls: Object3DNode<OrbitControls, typeof OrbitControls>
        }
    }
}

extend({ OrbitControls })

interface OrbitRef {
    obj: { update: Function }
}

function CameraOrbitControls(props: any): ReactElement {

    const ref = useRef<OrbitRef>();
    const { camera, gl } = useThree();

    return (
        <>
            <orbitControls ref={ref} args={[camera, gl.domElement]} {...props} />
        </>
    )
}

export default CameraOrbitControls
