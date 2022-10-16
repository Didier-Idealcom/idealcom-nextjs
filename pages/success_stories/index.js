import client from '../../client'
import Link from 'next/link'

export default function SuccessStories({success_stories}) {
    return <>
        <main>
            <h1>Success stories</h1>
            <ul>
                {success_stories.map(success_story =>
                <li key={success_story._id}>
                    <Link href={`/success_stories/${success_story.slug.current}`}>
                        <a>{success_story.title}</a>
                    </Link>
                </li>
                )}
            </ul>
        </main>
    </>
}

export async function getStaticProps() {
    const success_stories = await client.fetch(`*[_type == "success_story"]`);
    return {
        props: {
            success_stories
        }
    }
}
