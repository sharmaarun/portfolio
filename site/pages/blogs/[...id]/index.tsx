import { Mainlayout } from "@/components/layouts/main";
import { getAllPostIds, getPostData, getSortedPostsData } from "@/utils/posts";
import { Box, Heading, HStack, Stack, Tag } from "@chakra-ui/react";
import { formatDistance } from "date-fns";
import { DiscussionEmbed } from "disqus-react";
import Head from "next/head";
import Styles from "./index.module.css";
export interface BlogPostProps {
    postData?: any
    allPosts?: any[]
}

export function BlogPost({ postData, allPosts }: BlogPostProps) {
    const { html, title, author, date, id, bannerUrl } = postData || {}
    let PAGE_URL = "";
    let PAGE_ID = id?.join("/")
    if (typeof window !== "undefined") {
        PAGE_URL = window.location.href
    }
    return (
        <Mainlayout posts={allPosts}>
            <Stack
                w="100%"
                maxW="6xl"
                mx="auto"

            >
                <Head>
                    <title>{title}</title>
                </Head>
                <Stack>
                    <Box>
                        <Box bg={`url(${bannerUrl || "/hero-bg.jpg"})`} bgSize="cover" bgPos="center" pos="relative">
                            <Box pos="absolute" left="0" right="0" top="0" bottom="0" bg="linear-gradient(180deg, rgba(255,255,255,0) 20%, rgba(255,255,255,1) 100%)" zIndex={0} />
                            <Box
                                pos="relative"
                                className="page-width"
                                w="100%" pt={[32, 32, 48]}
                                pb={12}
                                zIndex={1}
                            >
                                <Stack >
                                    <Box>
                                        <Heading>{title}</Heading>
                                    </Box>
                                    <HStack pt={4} alignItems="center">
                                        {author ? <Heading size="xs">{author?.length ? `- ${author}` : ""}</Heading> : ""}
                                        <Box>
                                            {date ? <Tag><Heading size="xs">{formatDistance(new Date(date), new Date(), { addSuffix: true })}</Heading></Tag> : ""}
                                        </Box>
                                    </HStack>
                                </Stack>
                            </Box>
                        </Box>
                        <Box className="page-width" w="100%">
                            <Stack px={[4]} fontSize="xl">

                                <Stack py={8}>
                                    <Box borderTop="1px solid" borderColor={"borderlight"} pb={12} />
                                    <Box dangerouslySetInnerHTML={{ __html: html }} className={Styles.wrapper} />
                                    <Box pt={32}>
                                        <Box borderTop="1px solid" borderColor={"borderlight"} pb={12} />
                                        <Heading size="md" pb={8} textAlign="center">COMMENTS</Heading>
                                        <Box p={4} bg="brand.50" border="1px solid" borderRadius={10} borderColor="borderdark">
                                            <DiscussionEmbed
                                                shortname={"sendlix-com"}
                                                config={{
                                                    url: PAGE_URL,
                                                    identifier: PAGE_ID,
                                                    title
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Mainlayout>
    )
}
export default BlogPost

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: any) {
    const allPosts = getSortedPostsData({ skipRoot: true });
    const postData = getPostData(params.id);
    return {
        props: {
            postData,
            allPosts: allPosts?.slice(0, 3)
        },
    };
}