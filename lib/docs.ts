import { allDocs } from "@/.contentlayer/generated"
import { notFound } from "next/navigation"

function replaceSpace(slug: string): string {
    return decodeURIComponent(slug);
}

export async function getDocFromParams(slug: string) {
    console.log(slug, replaceSpace(slug));
    const doc = allDocs.find(doc => doc.slugAsParams === replaceSpace(slug));
    if (!doc) return notFound();
    return doc;
}

export async function getAllDocsFormatted() {
    return allDocs.map(doc => {
        return {
            title: doc.title,
            slug: doc.slug,
            desc: doc.description,
            date: doc.publishedOn,
        };
    });
}