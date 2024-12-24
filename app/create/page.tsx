
"use client"

import '@mdxeditor/editor/style.css'
import { headingsPlugin, listsPlugin, imagePlugin, linkDialogPlugin, quotePlugin, sandpackPlugin, thematicBreakPlugin, frontmatterPlugin, toolbarPlugin, codeBlockPlugin, codeMirrorPlugin } from '@mdxeditor/editor'

import matter from "gray-matter"
import React, { useEffect, useState } from 'react'
import imageUploadHandler from './imageUploader'
import toolbarContents from './ToolbarContents'
import { simpleSandpackConfig } from './sandPackConfig'
import { color } from '@/constants'
import dynamic from 'next/dynamic'


const MDXEditor = dynamic(() => import("@mdxeditor/editor").then((mod) => mod.MDXEditor), { ssr: false });

export default function CreateMarkdown() {
    const [text, setText] = useState({
        title: "",
        description: "",
        publishedOn: "",
        content: "",
    });

    const contentMatter = matter(text.content || "---\ntitle: ''\ndescription: ''\npublishedOn: ''\n---\n");

    useEffect(() => {
        try {
            const data = contentMatter.data || {};
            setText((prev) => ({
                ...prev,
                title: data.title || "",
                description: data.description || "",
                publishedOn: data.publishedOn || "",
            }));
        } catch (error) {
            console.error("Error parsing frontmatter:", error);
        }
    }, [contentMatter.data]);

    return (
        <div style={{ backgroundColor: color.WHITE }} className="min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Create a New Post</h1>

                <div style={{
                    zIndex : "100000"
                }} className="space-y-4">
                    <p className="w-full flex text-center h-8 px-2 font-semibold text-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {text.title ? text.title : "Post Title"}
                    </p>

                    <p className="w-full flex text-center h-8 px-2 font-semibold text-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {text.description ? text.description?.substring(0,100) + "..." : "Post Description"}
                    </p>

                    <p className="w-full flex text-center h-8 px-2 font-semibold text-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                        {text.publishedOn ? new Date(text.publishedOn).toUTCString().substring(0, 16) : "Post Published Date format ( yyyy - mm - dd )"}
                    </p>

                    <MDXEditor
                        className="border border-gray-300 rounded z-50"
                        onChange={(value) =>
                            setText((prev) => ({
                                ...prev,
                                content: value,
                            }))
                        }
                        markdown={text.content}
                        plugins={[
                            headingsPlugin(),
                            listsPlugin(),
                            quotePlugin(),
                            thematicBreakPlugin(),
                            linkDialogPlugin(),
                            frontmatterPlugin(),
                            imagePlugin({
                                imageUploadHandler: (image) => imageUploadHandler(image, text.title || "untitled"),
                            }),
                            toolbarPlugin({
                                toolbarContents: () => toolbarContents({ contentMatter }),
                            }),
                            codeBlockPlugin({ defaultCodeBlockLanguage: "py" }),
                            sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
                            codeMirrorPlugin({
                                codeBlockLanguages: {
                                    js: "javascript",
                                    ts: "typescript",
                                    jsx: "jsx",
                                    tsx: "tsx",
                                    py: "python",
                                    css: "css",
                                    html: "html",
                                    md: "markdown",
                                    cpp: "cpp",
                                },
                            }),
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
