import { Args, defineDocumentType, DocumentTypeDef, makeSource } from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import rehypePrettyCode from "rehype-pretty-code"
import remarkGfm from "remark-gfm"

/** @type {import("contentlayer/source-files").ComputedFields} */

const computedFields: DocumentTypeDef<"Doc">["computedFields"] = {
    slug: {
        type: "string",
        resolve: doc => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: "string",
        resolve: doc => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Doc = defineDocumentType(() => ({
    name: "Doc",
    filePathPattern: `works/**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
        description: {
            type: "string",
            description: "The description of the post",
            required: true,
        },
        publishedOn: {
            type: "date",
            description: "The date of the post",
            required: true,
        },
    },
    computedFields: computedFields
}))

const args: Args = {
    contentDirPath: "content",
    documentTypes: [Doc],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                rehypePrettyCode
            ],
        ],
    },
}

export default makeSource({
    contentDirPath: args.contentDirPath,
    documentTypes: args.documentTypes,
    mdx: args.mdx
})
