import Link from 'next/link'
//=========> COMPONENTS 
import Layout from '../components/Layout/Layout'

const HomePage = () => {
    return (
        <Layout title="Home">
            <h1>This is the home page</h1>
            <Link href="/us">
                <a>Go to the USA shows</a>
            </Link>
        </Layout>
    )
}

export default HomePage
