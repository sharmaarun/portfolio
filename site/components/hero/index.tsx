import { Heading, HStack, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import { ReactElement, Suspense } from 'react'
import Me from '../3d/me'
import { ActionButton } from '../action-button'
import Canvas from '../canvas'
import Link from '../link'
import { Marquee } from '../rotator'

interface Props {
    children?: any
}

const techs = [
    { name: "React", src: "/react.svg" },
    { name: "Gatsby", src: "/gatsby.svg" },
    { name: "Next", src: "/next.svg" },
    { name: "Node", src: "/node.svg" },
    { name: "MongoDB", src: "/mongodb.svg" },
    { name: "PostgreSQL", src: "/postgres.svg" },
    { name: "GraphQL", src: "/graphql.svg" },
    { name: "TypeScript", src: "/typescript.svg" },
    { name: "Webpack", src: "/webpack.svg" },
    { name: "Docker", src: "/docker.svg" },
    { name: "AWS", src: "/aws.svg" },
    { name: "Git", src: "/git.svg" },
    { name: "Figma", src: "/figma.svg" },
]

export function Hero({ children }: Props): ReactElement {
    const window_ = typeof window !== "undefined" ? window : {
        innerWidth: 1,
        innerHeight: 1
    }
    const offset = useBreakpointValue([250, 250, 300])
    const camPosZ = useBreakpointValue([600, 500, 400]) ?? 0
    const uSize = useBreakpointValue([1.0, 1.0, 1.5]) ?? 1.0;
    return (
        <>
            <Canvas
                style={{
                    zIndex: 2,
                    position: "fixed",
                    width: "100vw",
                    height: "100vh",
                    pointerEvents: "none"
                }}
                id="HOME_CANVAS"
                camera={{
                    focus: 45,
                    position: [0, 0, camPosZ],
                    aspect: window_.innerWidth / window_.innerHeight,
                    near: 0.01,
                    far: 1000
                }}
                gl={{ antialias: false }}
            >
                <Suspense fallback={null}>
                    <Me uSize={uSize} offsetX={offset} />
                </Suspense>
            </Canvas>
            <HStack
                pos="relative"
                w="100%"
                maxW="6xl"
                mx="auto"
                minH="100vh"
                px={[4, 4, 4, 8]}
            >
                <Stack
                    pos="relative"
                    zIndex="3"
                    w={["100%", "100%", "100%", "50%"]}
                >
                    <Heading lineHeight={["3rem", "3rem", "4rem"]} size={["xl", "xl", "2xl"]} fontWeight="normal">
                        Hey!<br />
                        I am ARUN, a <br />
                        <Text display="inline" color="red">
                            Full Stack
                        </Text> Developer
                    </Heading>
                    <Text>
                        Curating beautiful experiences for the web, with beautiful frameworks...
                    </Text>
                    <Stack py={4}>
                        <Marquee>
                            {techs.map((t, ind) =>
                                <Stack key={ind} spacing={2} px={4} flex={1} minW="64px" alignItems="center" >
                                    <Image src={t.src} minW="64px" h="64px" />
                                    <Text>
                                        {t.name}
                                    </Text>
                                </Stack>
                            )}
                        </Marquee>
                    </Stack>
                    <Stack>
                        <Link href="#contact">
                            <ActionButton w="300px" display="inline">GET IN TOUCH</ActionButton>
                        </Link>
                    </Stack>
                </Stack>
                <Stack
                    w={["100%", "100%", "100%", "50%"]}
                >

                </Stack>
            </HStack>
        </>
    )
}
