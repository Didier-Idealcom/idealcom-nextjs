import client from '../../client'

export default function Post({post}) {
    return <>
        <main>
            <h1>{post.title}</h1>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const post = await client.fetch(`*[_type == "post" && slug.current == "${params.slug}"][0]`);
    return {
        props: {
            post
        }
    }
}

export async function getStaticPaths() {
    const posts = await client.fetch('*[_type == "post"]');
    return {
        paths: posts.map(post => ({
            params: {slug: post.slug.current}
        })),
        fallback: false
    }
}
