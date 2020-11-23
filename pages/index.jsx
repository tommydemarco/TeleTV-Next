import Link from 'next/link'
//=========> COMPONENTS 
import Layout from '../components/Layout/Layout'
import HomeFeature from '../components/HomeFeature/HomeFeature'

const features = [
    {id: 1, name: "Fast", icon: ""},
    {id: 1, name: "Reliable", icon: ""},
    {id: 2, name: "Connected", icon: ""}
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
        <Layout title="Home">
            <h1>This is the home page</h1>
            {renderFeatures()}
        </Layout>
    )
}

export default HomePage
