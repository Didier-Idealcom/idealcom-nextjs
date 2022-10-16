import client from '../../client'

export default function Realisation({realisation}) {
    return <>
        <main>
            <h1>{realisation.title}</h1>
        </main>
    </>
}

export async function getStaticProps({params}) {
    const realisation = await client.fetch(`*[_type == "realisation" && slug.current == "${params.slug}"][0]`);
    return {
        props: {
            realisation
        }
    }
}

export async function getStaticPaths() {
    const realisations = await client.fetch('*[_type == "realisation"]');
    return {
        paths: realisations.map(realisation => ({
            params: {slug: realisation.slug.current}
        })),
        fallback: false
    }
}
