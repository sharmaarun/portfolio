import { HStack, Image, Stack, StackProps, Text } from "@chakra-ui/react"
import Link from "../link"

export interface HeaderProps extends StackProps {
    children?: any
}

const links = [
    { href: '/', label: 'Root' },
    { href: '/#work', label: 'Work' },
    { href: 'https://github.com/sharmaarun', label: 'Github', target: '_blank' }
]

export function Header({ children, ...props }: HeaderProps) {
    return (
        <Stack
            pos="fixed"
            zIndex="10"
            w="100%"
            bg="white.900"
            // shadow="md"
            alignItems="center"
            justifyContent="center"
            bgColor="whiteAlpha.900"
            borderBottom="1px dashed"
            borderColor="blackAlpha.300"
            {...props}
        >
            <HStack
                w="100%"
                maxW="6xl"
                p={4}
            >
                <HStack flex={1}>
                    <Image src="/logo.svg" />
                </HStack>
                <HStack spacing={8}>
                    {links.map(({ href, label, target }) => (
                        <Link
                            href={href} target={target} key={`${href}${label}`}
                        >
                            {label}
                        </Link>
                    ))}
                </HStack>
            </HStack>
        </Stack>
    )
}
