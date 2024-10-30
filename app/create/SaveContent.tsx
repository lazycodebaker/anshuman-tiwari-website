
import matter from "gray-matter"
import { Button, message } from "antd"

export default function SaveContent({ contentMatter }: { contentMatter: matter.GrayMatterFile<string> }) {

    async function createPost() {
        const formData = new FormData()
        formData.set('content', JSON.stringify(contentMatter))

        const response = await fetch('/api/file', {
            method: 'POST',
            body: formData
        })

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        const { message: ResposeMessage } = await response.json() as { message: string }
        message.success(ResposeMessage)
    }
    return (
        <Button onClick={createPost}>
            Create Post
        </Button>
    )
}