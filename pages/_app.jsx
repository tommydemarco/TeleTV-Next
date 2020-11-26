//========> GLOBAL CSS
import './globals.scss'
//========> GLOBAL LAYOUT
import Layout from '../components/Layout/Layout'

export default function App({ Component, pageProps}) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}