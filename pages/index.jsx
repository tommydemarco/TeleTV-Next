import Link from 'next/link'
//=========> COMPONENTS 
import Layout from '../components/Layout/Layout'
import HomeFeature from '../components/HomeFeature/HomeFeature'

const features = [
    {id: 1, name: "Fast", icon: "fa fa-fire"},
    {id: 1, name: "Reliable", icon: "fa fa-shield"},
    {id: 2, name: "Connected", icon: "fa fa-globe"}
]

export const getStaticProps = async () => {

    const response = features

    console.log(response)

    return {
        revalidate: 1000,
        props: {
            features: response
        }
    }
}


const HomePage = ({ features }) => {

    const renderFeatures = () => {
        return features.map(feature => {
            return <HomeFeature key={feature.id} feature={feature} />
        })
    }

    return (
        <>
        <Layout title="Home">
            <div className="home-container">
                <h1 className="home-container__title">Welcome to TeleTV</h1>
                <span>Your ultimate guide for TV shows</span>
                <div className="features-container">
                    {renderFeatures()}
                </div>
            </div>
        </Layout>

        <style jsx>
            {`
            .home-container {
                margin-top:5rem;
                display:flex;
                flex-direction: column;
                text-align:center;
                flex-wrap:wrap;
                justify-content:space-between;
            }
            .home-container__title {
                    margin: 0 0 .5rem 0;
            }
            .features-container {
                display:flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-top:5rem;
            }

            @media only screen and (max-width:786px) {
                .features-container {
                    flex-direction: column;
                }
            }
            `}
        </style>
        </>

    )
}

export default HomePage
