
import { Mainlayout } from "@/components/layouts/main"
import Link from "@/components/link"
import { getSortedPostsData } from "@/utils/posts"
import { Box, Heading, HStack, Stack, Tag } from "@chakra-ui/react"
import { formatDistance } from "date-fns"
import { useState } from "react"

export interface BlogsPageProps {
    allPosts: any[]
}


export function BlogsPage({ allPosts }: BlogsPageProps) {
    const [search, setSearch] = useState<string>("")

    allPosts = allPosts?.filter(p => p.title.includes(search)) || []
    return (
        <Mainlayout posts={allPosts}>
            <Stack
                minH="100vh"
                pos="relative"
                w="100%"
                maxW="6xl"
                mx="auto"
                zIndex={0}
            >
                <Box
                    w="100%"
                    mx="0px auto"
                    boxShadow={"0px -3px -6px rgba(0,0,0,1)"}
                    zIndex={10}
                    py={[24, 24, 32]}
                    px={[4, 4, 0]}
                >
                    <Stack px={[0, 0, 4]} className="page-width" w="100%">
                        <Stack spacing={4}>
                            <Heading>Blogs</Heading>
                        </Stack>
                        <Stack pt={4}>
                            <HStack _after={{ content: '""', width: "32%" }} justifyContent="space-between" flexDir={["column", "column", "row"]} flexWrap={"wrap"} spacing={0}>
                                {allPosts?.map((post, ind) =>
                                    <HStack
                                        key={ind}
                                        justifyContent="center"
                                        alignItems="center"
                                        w={["100%", "100%", "32%"]}
                                        py={4}

                                    >
                                        <Link color={"white"} flex={1} href={("/blogs" + post?.absolutePath + "/" + post?.id)} _hover={{ textDecoration: "none" }}>
                                            <Box
                                                h="300px" w="100%"
                                                borderRadius={10}
                                                overflow="auto"
                                                shadow="base"
                                                border="1px solid"
                                                borderColor="borderdark"
                                                // _hover={{  }}
                                                bg={`url(${post.bannerUrl || "/hero-bg.jpg"}) no-repeat`}
                                                bgSize="120% 120%"
                                                bgPos="center"
                                                transition="all 0.2s"
                                                _hover={{
                                                    bgSize: "110% 110%",
                                                    shadow: "lg"
                                                }}
                                                pos="relative"
                                                role="group"
                                            >
                                                <Stack w="100%" p={4} pos="absolute" bottom="0" left="0" right="0" bg="blackAlpha.800">
                                                    <Box>
                                                        <Heading size="md" display="inline">{post.title}</Heading>
                                                        {post?.author ? <Heading size="md" display="inline">{` - ${post?.author}`}</Heading> : ""}
                                                    </Box>
                                                    <HStack h="0px" transition="all 0.2s" overflow="hidden" _groupHover={{
                                                        h: "30px"
                                                    }}>
                                                        {post?.date ? <Tag>
                                                            <Heading size="sm" display="">{formatDistance(new Date(post?.date), new Date(), { addSuffix: true })}</Heading>
                                                        </Tag>
                                                            : ""}
                                                    </HStack>
                                                </Stack>
                                            </Box>
                                        </Link>
                                    </HStack>)}
                            </HStack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Mainlayout>
    )
}

export async function getStaticProps() {
    const allPosts = getSortedPostsData({ skipRoot: true })
    return {
        props: {
            allPosts
        }
    }
}

export default BlogsPage