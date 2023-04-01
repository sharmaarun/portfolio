import { RXICO_CHEVRON_LEFT, RXICO_CHEVRON_RIGHT } from "@/icons"
import { Box, HStack, Icon, IconButton, Stack, StackProps } from "@chakra-ui/react"
import React, { useEffect } from "react"
import Styles from "./index.module.css"
export type CarouselItem = {
    title: any
    description?: any
    image?: string
}

export interface WorkCarouselProps extends StackProps {
    children?: any
    items?: CarouselItem[]
}

const dummyItems: CarouselItem[] = [

]

const tids: any = {
    resize: 0
}
export function WorkCarousel({ children, items = dummyItems, ...props }: WorkCarouselProps) {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const activeRef = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)


    useEffect(() => {
        handleResize()


    }, [activeIndex])

    const handleResize = () => {
        clearTimeout(tids.resize)
        tids.resize = setTimeout(() => {
            if (activeRef.current && containerRef.current) {
                containerRef.current?.scrollTo(activeRef.current.offsetLeft, 0)
                containerRef.current.style.height = `${activeRef.current.offsetHeight + 128}px`
                const el = document.getElementById("WORK_CAROUSEL_OVERLAY")
                if (el) {
                    el.style.height = `${activeRef.current.offsetHeight + 128}px`
                }
            }

        }, 100)
    }

    const handleNext = () => {
        if (activeIndex < items.length - 1) {
            setActiveIndex(activeIndex + 1)
        } else {
            setActiveIndex(0)
        }
    }

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1)
        } else {
            setActiveIndex(items.length - 1)
        }
    }

    const handles = <>
        <Stack
            position="absolute"
            justifyContent="center"
            top={0}
            bottom={0}
            left={[5, 5, 10]}
            zIndex={4}
            fontSize="6xl"
            onClick={handlePrev}
            id="WORK_CAROUSEL"
        >
            <Icon
                _groupHover={{
                    bgColor: "whiteAlpha.500"
                }}
            >
                <RXICO_CHEVRON_LEFT />
            </Icon>
        </Stack>
        <Stack
            position="absolute"
            justifyContent="center"
            top={0}
            bottom={0}
            right={[5, 5, 10]}
            zIndex={4}
            fontSize="6xl"
            onClick={handleNext}
        >
            <Icon
                _groupHover={{
                    bgColor: "whiteAlpha.500"
                }}
            >
                <RXICO_CHEVRON_RIGHT />
            </Icon>
        </Stack>
    </>

    const activeItem = items?.[activeIndex]

    return (
        <Stack
            {...props}
            spacing={0}
            pos="relative"
            ref={containerRef}
            w="100%"
            alignItems="stretch"
            justifyContent="stretch"
            role={"group"}
        >
            {handles}
            <Stack
                flex={1}
                alignItems="center"
                justifyContent="center"
                overflowX="auto"
                spacing={0}
                zIndex={0}
                bgImg={`url(${activeItem?.image})`}
                bgSize="cover"
                bgPos="center"
                bgRepeat="no-repeat"
                overflow={"hidden"}
            >
                <Box
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    h="100%"
                    w="100%"
                    id="WORK_CAROUSEL_OVERLAY"
                    bgColor="blackAlpha.700"
                    position="absolute"
                    backdropFilter={"blur(10px)"}
                />
                {items?.map((item, index) => {
                    return <Stack
                        key={index}
                        ref={activeIndex === index ? activeRef : null}
                        className={`item ${activeIndex === index ? Styles.active : ""}`}
                        pos="absolute"
                        w="100%"
                        opacity={activeIndex === index ? 1 : 0}
                        zIndex={activeIndex === index ? 1 : 0}
                        p={activeIndex === index ? 8 : 0}
                        transition={"0.2s all"}
                        alignItems="center"
                        justifyContent="center"
                        maxW={["100%", "100%", "80%"]}
                        textAlign="justify"
                    >

                        {item?.title}
                        <Stack
                            maxH="400px"
                            overflowY="auto"
                            pos="relative"
                        >
                            {item?.description}
                        </Stack>
                    </Stack>
                })
                }
            </Stack>
        </Stack>
    )
}