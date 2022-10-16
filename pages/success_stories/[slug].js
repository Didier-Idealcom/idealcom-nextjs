import client from '../../client'

export default function SuccessStory({success_story}) {
    return <>
        <main>
            <h1>{success_story.title}</h1>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const success_story = await client.fetch(`*[_type == "success_story" && slug.current == "${params.slug}"][0]`);
    return {
        props: {
            success_story
        }
    }
}

export async function getStaticPaths() {
    const success_stories = await client.fetch('*[_type == "success_story"]');
    return {
        paths: success_stories.map(success_story => ({
            params: {slug: success_story.slug.current}
        })),
        fallback: false
    }
}
