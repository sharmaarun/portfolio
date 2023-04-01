import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified'
import markdown from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import hrehypeStringify from 'rehype-stringify'
import highlight from 'rehype-highlight'
import langJS from 'highlight.js/lib/languages/javascript'
import langPy from 'highlight.js/lib/languages/python'

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData(opts: any) {
    const allPostsData = traversePosts(opts)
    return allPostsData.sort((_a, _b) => {
        const { date: a } = _a || {};
        const { date: b } = _b || {};
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}
export function traversePosts(opts: any) {
    const {
        pdir = postsDirectory,
        absolutePath = "",
        skipRoot = false
    } = opts || {}
    // Get file names under posts dir
    const fileNames = fs.readdirSync(pdir);
    let allPostsData: any[] = [];
    fileNames.forEach((fileName) => {
        if (skipRoot && (fileName === "index.tsx" || fileName === "index.ts")) return;
        const fullPath = path.join(pdir, fileName);
        let matterResult;
        const id = fileName.replace(/\.md$/, '');
        if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
            const children = traversePosts({ pdir: pdir + "/" + fileName, absolutePath: absolutePath + "/" + fileName }) || {}
            allPostsData = [...allPostsData, ...children]
            return;
        }
        // Remove ".md" from file name to get id

        // Read markdown file as string
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        matterResult = matter(fileContents);
        // Combine the data with the id
        allPostsData.push({
            id,
            absolutePath,
            ...(matterResult?.data || {})
        })
    })
    // Sort posts by date

    return allPostsData;

}

const ids: any[] = [];
export function getAllPostIds(opts?: any) {
    const {
        pdir = postsDirectory,
        parentIds = [],
        skipRoot = false
    } = opts || {}
    // Get file names under posts dir
    const fileNames = fs.readdirSync(pdir);

    fileNames.forEach((fileName) => {
        if (skipRoot && (fileName === "index.tsx" || fileName === "index.ts")) return;
        const fullPath = path.join(pdir, fileName);
        const id = fileName.replace(/\.md$/, '');
        let isDir = false;
        if (fs.existsSync(fullPath) && fs.lstatSync(fullPath).isDirectory()) {
            getAllPostIds({ pdir: pdir + "/" + fileName, parentIds: [...parentIds, id] })
            isDir = true;
        }
        // Combine the data with the id
        if (isDir) return;
        ids.push({
            params: {
                id: [...parentIds, id],
                parentIds,
                _id: id,
            }
        })
    });
    // Sort posts by date
    return ids;
}

export const getPostData = (id: string | string[], pDir = postsDirectory) => {
    const subPath = Array.isArray(id) ? id?.join("/") : id
    let _post = fs.readFileSync(pDir + "/" + subPath + ".md", "utf-8")
    const matterResult = matter(_post)

    const languages = {
        python: langPy,
        js: langJS
    }

    const processor = unified()
        .use(markdown)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(highlight, { languages: languages })
        .use([hrehypeStringify, { allowDangerousHtml: true }])
    const h = processor.processSync(matterResult.content)
    return { id, html: h.value.toString(), ...(matterResult?.data || {}) }
}