import Link from 'next/link'
//=========> COMPONENTS 
import Layout from '../components/Layout/Layout'

export const getServerSideProps = () => {
    console.log(process.browser)

    return { props: { test: 'test' }}
}

const HomePage = () => {

    return (
        <Layout title="Home">
            <h1>This is the home page</h1>
            <Link href="/us">
                <a>Go to the USA shows</a>
            </Link>
            <h1>{process.browser}</h1>
        </Layout>
    )
}

export default HomePage
