import client from '../client'

export default function Page({page}) {
    return <>
        <main>
            <h1>{page.title}</h1>

            {page.content.map(section =>
            <div key={section._key} className={section._type}>
                <h2>{section.title}</h2>
            </div>
            )}
        </main>
    </>
}

export async function getStaticProps({params}) {
    const page = await client.fetch(`*[_type == "page" && slug.current == "${params.slug}"][0]`);
    return {
        props: {
            page
        }
    }
}

export async function getStaticPaths() {
    const pages = await client.fetch('*[_type == "page"]');
    return {
        paths: pages.map(page => ({
            params: {slug: page.slug.current}
        })),
        fallback: false
    }
}
