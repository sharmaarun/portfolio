import { RXICO_CHEVRON_LEFT, RXICO_CHEVRON_RIGHT } from "@/icons"
import { Box, Heading, HStack, Icon, IconButton, Stack, StackProps, Text } from "@chakra-ui/react"
import React from "react"
import Styles from "./index.module.css"
export type CarouselItem = {
    title: any
    description?: any
    image?: string
    leftProps?: any
    rightProps?: any
}

export interface BioCarouselProps extends StackProps {
    children?: any
    items?: CarouselItem[]
}

const dummyItems: CarouselItem[] = [

]

export function BioCarousel({ children, items = dummyItems, ...props }: BioCarouselProps) {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const activeRef = React.useRef<HTMLDivElement>(null)
    const containerRef = React.useRef<HTMLDivElement>(null)

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

    const handles = <HStack
        display={items.length > 1 ? "flex" : "none"}
        justifyContent="center">
        <IconButton
            variant="unstyled"
            fontSize="4xl"
            aria-label=""
            onClick={handlePrev}
        >
            <Icon>
                <RXICO_CHEVRON_LEFT />
            </Icon>
        </IconButton>
        <IconButton
            variant="unstyled"
            fontSize="4xl"
            aria-label=""
            onClick={handleNext}
        >
            <Icon>
                <RXICO_CHEVRON_RIGHT />
            </Icon>
        </IconButton>
    </HStack>

    return (
        <Stack
            {...props}
            spacing={0}
            overflow="hidden"
            pos="relative"
            ref={containerRef}
            w="100%"
        >
            {items?.map((item, index) => {
                return <HStack
                    zIndex={activeIndex === index ? 1 : 0}
                    ref={activeIndex === index ? activeRef : null}
                    flexDir={["column", "column", "row"]}
                    spacing={0}
                    key={index}
                    // minH="80vh"
                    alignItems="stretch"
                    w="100%"

                >
                    <Stack
                        pl={[4, 4, 8]} py={[0,0,32]}
                        w={["full", "full", "33%"]}
                        opacity={activeIndex === index ? 1 : 0}
                        {...(item.leftProps || {})}
                    >
                        <Stack h="100%" p={12} justifyContent="center">
                            <Heading color="blackAlpha.200" fontSize="7xl" fontWeight="thin" fontFamily="mono">
                                {activeIndex + 1}/{items?.length ?? 1}
                            </Heading>
                            {item.title}
                            <Stack >
                                {handles}
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack
                        w={["full", "full", "66%"]}
                        alignItems="stretch"
                        className={`${Styles.item} ${activeIndex === index ? Styles.active : ""}`}
                        {...(item.rightProps || {})}
                    >
                        {item.description}
                        <Stack display={["flex", "flex", "none"]}>
                            {handles}
                        </Stack>
                    </Stack>
                </HStack>
            })
            }
        </Stack>
    )
}