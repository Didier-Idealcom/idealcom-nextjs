import client from '../../client'
import Link from 'next/link'

export default function Blog({posts}) {
    return <>
        <main>
            <h1>Blog</h1>
            <ul>
                {posts.map(post =>
                <li key={post._id}>
                    <Link href={`/blog/${post.slug.current}`}>
                        <a>{post.title}</a>
                    </Link>
                </li>
                )}
            </ul>
        </main>
    </>
}

export async function getStaticProps() {
    const posts = await client.fetch(`*[_type == "post"]`);
    return {
        props: {
            posts
        }
    }
}
