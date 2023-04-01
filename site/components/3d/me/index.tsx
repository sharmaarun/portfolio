import { useFrame, useLoader } from '@react-three/fiber';
import { ReactElement, useEffect, useRef } from 'react';
import { BufferGeometry, Mesh, PlaneGeometry, ShaderMaterial, TextureLoader, Vector2 } from 'three';
const vs = require("./shader.vert").default;
const fs = require("./shader.frag").default;
import { useBreakpointValue } from "@chakra-ui/react"
interface Props {
    offsetX?: number
    offsetY?: number
    offsetZ?: number
    uSize?: number
}



function Me({
    offsetX = 0,
    offsetY = 0,
    offsetZ = 0,
    uSize = 1.0
}: Props): ReactElement {
    const mesh = useRef<Mesh<BufferGeometry>>();
    const geom = useRef<PlaneGeometry>();
    const shader = useRef<ShaderMaterial>();
    let texture: any;
    let r: number = 0.01;



    // const cDistortion = 

    const meTexture = useLoader(TextureLoader, "/me.png");
    const uniforms: any = {
        time: { type: 'f', value: 0.0 },
        uResolution: { type: 'v2', value: new Vector2(window.innerWidth, window.innerHeight) },
        uMouse: { type: 'v2', value: new Vector2() },
        uTexture: { type: 'f', value: meTexture },
        uDistortion: { type: 'f', value: 0 },
        uSize: { type: 'f', value: uSize ?? 1.0 },
    }


    useEffect(() => {
        if (typeof window !== "undefined") {
            uniforms.uDistortion.value = window.scrollY / 12;
            window.addEventListener("mousemove", (e) => {
                uniforms.uMouse.value.x = e.pageX - window.innerWidth / 2;
                uniforms.uMouse.value.y = (e.pageY * -1) + window.innerHeight / 2;
            })
            window.addEventListener("resize", (e) => {
                uniforms.uResolution.value.x = window.innerWidth;
                uniforms.uResolution.value.y = window.innerHeight;
            })
            window.addEventListener("scroll", (e) => {
                const val = window.scrollY / 12;
                uniforms.uDistortion.value = val;
            })
        }
    }, []);

    useFrame(({ clock }) => {
        uniforms.time.value = clock.elapsedTime;
        // uniforms.uDistortion.value += clock.elapsedTime / 100;
    })


    return (
        <points ref={mesh as any} position={[offsetX, offsetY, offsetZ]}>
            <planeGeometry ref={geom as any} args={[569, 652, 569, 652]} />
            <shaderMaterial ref={shader as any} uniforms={uniforms} vertexShader={vs} fragmentShader={fs} />
        </points>
    )
}

export default Me
