
export const dynamic = 'force-dynamic'
 
import { NextRequest } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execPromise = promisify(exec)

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData()

        const contentMatter = JSON.parse(formData.get('content') as string)
        
        const uploadDir = path.join(process.cwd(),'content','works')
        await fs.mkdir(uploadDir, { recursive: true })

        const postId = contentMatter.data.title
        
        const fileExtension = '.mdx'
        const filePath = path.join(uploadDir, `${postId}${fileExtension}`)
        
        const metadata = `---\n${JSON.stringify(contentMatter.data)}\n---\n`    

        await fs.writeFile(filePath, `${metadata}${contentMatter.content}`)

        await execPromise('bunx contentlayer build')

        return new Response(JSON.stringify({
            message: 'File created successfully',
            content: contentMatter
        }), { status: 200 })

    } catch (error) {
        console.error('Error while creating the file:', error)

        return new Response(
            JSON.stringify({ error: 'Error while createing the file' }),
            { status: 500 }
        )
    }
}
