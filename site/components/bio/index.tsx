import { Heading, Stack, StackProps, Text } from "@chakra-ui/react"
import { BioCarousel } from "../bio-carousel"
import { BorderFrame } from "../border-frame"
import { CarouselItem } from "../work-carousel"

export interface BioSectionProps extends StackProps {
    children?: any
}


const dummyItems: CarouselItem[] = [
    {
        title: <><Heading fontWeight="normal" letterSpacing="5px" color="black">
            ALWAYS ON
        </Heading>
            <Heading fontWeight="normal" letterSpacing="5px" color="white">
                WORKATIONS
            </Heading>
        </>,
        description: <Text p={12} py={[12,12,24]}  align="justify" color="black" fontSize="xl" fontWeight="thin">
            With a background in design, I work closely with design focused teams to build websites and microsites for companies and individuals. I have years of experience working and collaborating on product teams and leading engineering efforts.
            <br />
            <br />
            My experience in design and engineering allows me to bridge the gap between the creative and technical aspects of web development. I am skilled in creating functional, user-friendly interfaces that are visually stunning and engaging.
            <br />
            <br />

            I am highly proficient in web technologies such as React, JS/TS, Next.js, Gatsby,js, Node, MongoDB, Postgres, GraphQL and more. I am also experienced in working with various Content Management Systems (CMS) such as WordPress and Drupal, which enables me to quickly create customized websites and microsites.
            <br />
            <br />

            In addition to my technical skills, I possess strong project management abilities. I can lead teams of designers, developers, and content creators to successfully deliver high-quality projects on time and within budget. My approach to project management emphasizes open communication, collaboration, and a deep understanding of client needs.
        </Text>,
        // image: "https://picsum.photos/200/300",
        leftProps: {
            bg: "red.500"
        },
        rightProps: {
            bg: "blackAlpha.100",
            color: "black"
        }
    },

]


export function BioSection({ children, ...props }: BioSectionProps) {
    return (
        <Stack
            {...props}
            pos="relative"
        >
            <BioCarousel items={dummyItems} />
            <BorderFrame zIndex={3} borderColor="black" />
        </Stack>
    )
}
