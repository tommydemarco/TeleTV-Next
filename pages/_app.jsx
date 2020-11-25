//========> GLOBAL CSS
import './globals.scss'
//========> GLOBAL LAYOUT
import Layout from '../components/Layout/Layout'
//========> REGISTERING THE STENCIL GLOBAL COMPONENT

export default function App({ Component, pageProps}) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}