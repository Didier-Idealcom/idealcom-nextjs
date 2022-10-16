import client from '../../client'
import Link from 'next/link'

export default function Realisations({realisations}) {
    return <>
        <main>
            <h1>Réalisations</h1>
            <ul>
                {realisations.map(realisation =>
                <li key={realisation._id}>
                    <Link href={`/realisations/${realisation.slug.current}`}>
                        <a>{realisation.title}</a>
                    </Link>
                </li>
                )}
            </ul>
        </main>
    </>
}

export async function getStaticProps() {
    const realisations = await client.fetch(`*[_type == "realisation"]`);
    return {
        props: {
            realisations
        }
    }
}
