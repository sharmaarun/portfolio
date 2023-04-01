import React from "react"
import { Heading, HStack, Image, Stack, StackProps, Text } from "@chakra-ui/react"
import Link from "../link"
import { ContactForm } from "../contact-form"
import { BlogsWidget } from "../blogs-widget"

export interface FooterProps extends StackProps {
    children?: any
    posts?: any[]
}

const socialLinks = [
    // { href: 'https://www.facebook.com/arun.book', img: '/fb-icon.svg', target: '_blank' },
    // { href: 'https://twitter.com/arunsharma333', img: '/twitter-icon.svg', target: '_blank' },
    { href: 'https://www.linkedin.com/in/arun-sharma-619b1426', img: '/linkedin-icon.svg', target: '_blank' },
    { href: 'https://github.com/sharmaarun', img: '/github-icon.svg', target: '_blank' },
    { href: 'mailto:info@spirex.co', img: '/mail-icon.svg', target: '_blank' },
]

export function Footer({ children, posts, ...props }: FooterProps) {
    return (
        <Stack
            minH="300px"
            bgColor="blackAlpha.100"
            justifyItems="stretch"

            {...props}
        >
            <HStack
                flex={1}
                alignItems="stretch"
                justifyContent="stretch"
                flexDir={['column-reverse', 'column-reverse', 'row']}
                spacing={0}
            >
                <Stack
                    w={['100%', '100%', '70%']}
                    px={[4, 4, 12]}
                    py={12}
                    spacing={4}
                    id="contact"
                >
                    <Image w="32" src="/logo.svg" />
                    <Stack spacing={0}>
                        <Heading size="xs">
                            CONTACT ME FOR COLLABORATION/HIRE
                        </Heading>
                        <Link href="mailto:info@spirex.co" color="red.500">
                            info@spirex.co
                        </Link>
                    </Stack>

                    <Stack alignItems="flex-start">
                        <ContactForm w="100%" maxW="xl" />
                    </Stack>
                    <Stack py={4}>
                        <HStack justifyContent="center" w="100%" maxW="xl">
                            {socialLinks.map(({ href, img, target }, ind) => (
                                <Link key={ind} href={href} target={target} >
                                    <Image w="8" src={img} />
                                </Link>
                            ))}
                        </HStack>
                    </Stack>
                    <Stack>
                        <Text color="gray.400" fontSize="xs">
                            © 2021 Sharmafolio. All rights reserved.
                        </Text>
                    </Stack>
                </Stack>
                <Stack
                    w={['100%', '100%', '30%']}
                    bgColor="red.500"
                >
                    <BlogsWidget posts={posts} />
                </Stack>
            </HStack>
        </Stack>
    )
}

