
"use client"

import '@mdxeditor/editor/style.css'
import { headingsPlugin, MDXEditor, listsPlugin, imagePlugin, linkDialogPlugin, quotePlugin, sandpackPlugin, thematicBreakPlugin, frontmatterPlugin, toolbarPlugin, codeBlockPlugin, codeMirrorPlugin } from '@mdxeditor/editor'

import matter from "gray-matter"
import React, { useEffect, useState } from 'react'
import imageUploadHandler from './imageUploader'
import toolbarContents from './ToolbarContents'
import { simpleSandpackConfig } from './sandPackConfig'
import { color } from '@/constants'

export default function CreateMarkdown() {

    const [text, setText] = useState({
        title: '',
        description: '',
        publishedOn: '',
        content: ''
    })

    const contentMatter = matter(text.content);

    useEffect(() => {
        const data = contentMatter.data
        setText((prev) => {
            return {
                ...prev,
                title: data?.title,
                description: data?.description,
                publishedOn: data?.publishedOn,
                content: data?.content
            }
        })
    }, [contentMatter.data]);

    return <div style={{
        backgroundColor: color.WHITE
    }} className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Create a New Post</h1>

            <div className="space-y-4">
                <p className="w-full flex text-center h-8 px-2  font-semibold text-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {text.title ? text.title : "Post Title"}
                </p>

                <p className="w-full flex text-center h-8 px-2  font-semibold text-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {text.description ? text.description : "Post Description"}
                </p>

                <p className="w-full flex text-center h-8 px-2  font-semibold text-md border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {text.publishedOn ? new Date(text.publishedOn).toUTCString().substring(0, 16) : "Post Published Date"}
                </p>
                <MDXEditor
                    className='border border-gray-300 rounded'
                    onChange={(value) => {
                        setText((prev) => {
                            return {
                                ...prev,
                                content: value
                            }
                        })
                    }}
                    markdown={''}
                    plugins={[
                        headingsPlugin(),
                        listsPlugin(),
                        quotePlugin(),
                        thematicBreakPlugin(),
                        linkDialogPlugin(),
                        frontmatterPlugin(),
                        listsPlugin(),
                        imagePlugin({
                            imageUploadHandler: (image: File) => imageUploadHandler(image, text.title)
                        }),
                        toolbarPlugin({
                            toolbarContents: () => toolbarContents({ contentMatter: contentMatter })
                        }),
                        codeBlockPlugin({ defaultCodeBlockLanguage: 'py' }),
                        sandpackPlugin({ sandpackConfig: simpleSandpackConfig }),
                        codeMirrorPlugin({
                            codeBlockLanguages: {
                                js: 'javascript',
                                ts: 'typescript',
                                jsx: 'jsx',
                                tsx: 'tsx',
                                py: 'python',
                                css: 'css',
                                html: 'html',
                                md: 'markdown',
                                cpp: 'cpp',
                            }
                        })
                    ]}
                />
            </div>
        </div>
    </div>

}