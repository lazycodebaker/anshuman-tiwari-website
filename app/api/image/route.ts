
export const dynamic = 'force-dynamic'
 
import type { NextRequest } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const image = formData.get('image') as File
    const title = formData.get('title') as string

    const postId = title
    const imageId = uuidv4()

    const uploadDir = path.join(process.cwd(), 'public', 'assets', postId)
    await fs.mkdir(uploadDir, { recursive: true })

    if (!image) {
      return new Response(JSON.stringify({ error: 'No image found' }), {
        status: 400,
      })
    }

    const arrayBuffer = await image.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const fileExtension = image.type === 'image/png' ? 'png' : 'jpg'
    const filePath = path.join(uploadDir, `image-${imageId}.${fileExtension}`)

    await fs.writeFile(filePath, buffer)

    const imageUrl = `/assets/${postId}/image-${imageId}.${fileExtension}`
    return new Response(JSON.stringify({ url: imageUrl }), { status: 200 })

  } catch (error) {
    console.error('Error while uploading the image:', error)

    return new Response(
      JSON.stringify({ error: 'Error while uploading the image' }),
      { status: 500 }
    )
  }
}
