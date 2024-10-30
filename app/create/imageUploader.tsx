export default async function imageUploadHandler(image: File, title: string): Promise<string> {

    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)

    const response = await fetch('/api/image', {
        method: 'POST',
        body: formData
    })

    if (!response.ok) {
        throw new Error(response.statusText)
    }

    const json = await response.json() as { url: string }
    return json.url
}

