export default function Work({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}