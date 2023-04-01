import { RXICO_CALENDAR, RXICO_USER } from "@/icons"
import { Heading, HStack, Icon, Stack, StackProps, Text } from "@chakra-ui/react"
import format from "date-fns/format"
import Link from "../link"

export interface BlogsWidgetProps extends StackProps {
    children?: any
    posts?: any[]
}

export function BlogsWidget({ children, posts, ...props }: BlogsWidgetProps) {
    const blogs_ = [{
        title: "Simple Git CI/CD",
        description: "Blog 1 description",
        author: "Author 1",
        date: new Date()
    }, {
        title: "Blog 2",
        description: "Blog 2 description",
        author: "Author 2",
        date: new Date()
    },
    {
        title: "Blog 2",
        description: "Blog 2 description",
        author: "Author 2",
        date: new Date()
    }
    ]
    const blogs = posts?.map(p => {
        p.date = typeof p.date === "string" ? new Date(p.date) : p.date
        return p
    }) ?? []
    return (
        <Stack
            py={12}
            {...props}>
            <Stack>
                <Stack
                    px={[4, 4, 12]}
                >
                    <Heading pb={4} size="xs" color="white">
                        BLOGS
                    </Heading>
                </Stack>
                <Stack
                    spacing={0}
                >
                    {blogs.map((blog, ind) => (
                        <Link
                            key={ind}
                            href={`/blogs/${blog.id}`}
                            _hover={{ textDecoration: "none" }}
                            isExternal
                        >
                            <Stack
                                key={ind}
                                borderBottom="1px solid"
                                borderColor="whiteAlpha.300"
                                pb={4}
                                _hover={{
                                    bgColor: "whiteAlpha.100"
                                }}
                                px={[4, 4, 12]}
                                py={2}
                                cursor="pointer"
                            >
                                <HStack

                                    spacing={8}
                                    alignItems="flex-start"
                                >
                                    <Heading size="3xl" color="whiteAlpha.300">
                                        {ind < 10 ? ("0" + (ind + 1)) : ind + 1}
                                    </Heading>
                                    <Stack>
                                        <Heading size="md" color="white">
                                            {blog.title}
                                        </Heading>
                                        <Text fontSize="sm" color="white">
                                            {blog.description}
                                        </Text>

                                        <HStack color="white">
                                            {blog?.date && <>
                                                <Icon>
                                                    <RXICO_CALENDAR />
                                                </Icon>
                                                <Text fontSize="xs" >
                                                    {format(blog.date, "dd MMM yyyy")}
                                                </Text>
                                            </>
                                            }

                                            {blog?.author &&
                                                <>
                                                    <Icon>
                                                        <RXICO_USER />
                                                    </Icon>
                                                    <Text fontSize="xs" >
                                                        {blog.author}
                                                    </Text>
                                                </>
                                            }
                                        </HStack>
                                    </Stack>
                                </HStack>
                            </Stack>
                        </Link>
                    ))}
                    <HStack justifyContent="center" py={4}>
                        <Link href="/blogs" color="white" isExternal>
                            <Text color="white" fontSize="sm">
                                View all blogs
                            </Text>
                        </Link>
                    </HStack>
                </Stack>
            </Stack>
        </Stack>
    )
}

