import Head from 'next/head'
//========> COMPONENTS 
import TheHeader from '../TheHeader/TheHeader'
import TheFooter from '../TheFooter/TheFooter'


export default function Layout({ children, title }) {
    return (
        <div>
            <Head>
                <title>TeleTV - {title}</title>
            </Head>

            <TheHeader />
                <div className="content-container">
                  {children}
                </div>
            <TheFooter />

            <style jsx>
                {`
                .content-container {
                    width:80%;
                    max-width: 120rem;
                    margin: 0 auto;
                }
                `}
            </style>
        </div>
    )
}