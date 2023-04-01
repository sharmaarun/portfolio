import React from "react"
import { Heading, HStack, Stack, StackProps, Text } from "@chakra-ui/react"
import { BorderFrame } from "../border-frame"
import { RedActionButton } from "../action-button"
import Link from "../link"

export interface AboutMeProps extends StackProps {
    children?: any
}

export function AboutMe({ children, ...props }: AboutMeProps) {
    return (
        <Stack
            minH="100vh"
            bg="blackAlpha.100"
            spacing={0}
            pos="relative"
            {...props}
        >
            <BorderFrame zIndex={1} borderColor="red" display={["none", "none", "block"]} />
            <HStack
                spacing={0}
                flexWrap="wrap"
            >
                <Stack
                    w={["100%", "100%", "50%"]}
                    bgImg={`url(/mebg.png)`}
                    bgSize="cover"
                    bgPos="center"
                    minH="100vh"
                    pos="relative"
                >
                    <BorderFrame borderColor="red" display={["block", "block", "none"]} />
                </Stack>
                <Stack
                    w={["100%", "100%", "50%"]}
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                    px={[4, 4, 0]}
                    py={[12]}
                    spacing={8}
                >
                    <Heading textAlign="center" fontWeight="normal" size="2xl">
                        <Text color="red" display="inline">WEB</Text><br />
                        CLOUD & DATA
                    </Heading>
                    <Text maxW="xl" fontSize="xl" fontWeight="thin" mx="auto">
                        PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.
                    </Text>
                    <Link href="#contact">
                        <RedActionButton>HIRE ME</RedActionButton>
                    </Link>
                </Stack>
            </HStack>
        </Stack>
    )
}
