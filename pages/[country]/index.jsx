import axios from 'axios'
import Error from 'next/error'
//=========> COMPONENTS 
import Layout from '../../components/Layout/Layout'
import ShowThumbnail from '../../components/ShowThumbnail/ShowThumbnail'

export async function getServerSideProps(context) {

    const { query } = context 
    const country = query.country
    
    let data;
    let shows;
    const url = `https://api.tvmaze.com/schedule?country=${country}&date=2020-10-10`
    try {
        const response = await axios.get(url)
        data = response.data
        shows = data.map(show => show.show)
        //sorry about the syntax but I've been getting 500s for 20 minutes straight,
        //just need to make sure it works 
        shows = shows.filter(show => {
            if (show.image.medium) {
                return true
            } else {
                return false
            }})
    } catch(err) {
        console.log(err)
        data = null
    }
    return { props: {shows, country} }
}

export default function ShowsPage({ shows, country }) {
    if(!shows) {
        return <Error statusCode={503}></Error>
    }
    const showList = shows.slice(0, 6)
    return (
        <Layout title="Shows">
            <div className="shows-container">
                {showList.map(show => {
                    return <ShowThumbnail 
                                id={show.id} 
                                show={show} 
                                href={`/[country]/[showId]`}
                                as={`/${country}/${show.id}`}
                            />
                })}
            </div>

            <style jsx>
                {`
                .shows-container {
                    margin-top:5rem;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                }
                `}
            </style>
            
        </Layout>
    )
}

