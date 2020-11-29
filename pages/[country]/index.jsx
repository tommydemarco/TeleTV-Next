import axios from 'axios'
import { useRouter } from 'next/router'
import Head from 'next/head'
//=========> COMPONENTS 
import ShowThumbnail from '../../components/ShowThumbnail/ShowThumbnail'

export async function getStaticProps(context) {

    const { params } = context 
    const country = params.country
    
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
            if (show.image) {
                return true
            } else {
                return false
            }})
            //gettin only the shows that have a title length that 
            //will not break my UI
            .filter(show => show.name.length < 20)
    } catch(err) {
        console.log(err)
        shows = null
    }
    return { props: {shows, country} }
}

//GET STATIC PROPS FOR INFINITE PATHS OPTIONS
export const getStaticPaths = () => {
    return {
        paths: [ { params: { country: 'us'}}, { params: { country: 'gb'}}],
        fallback: false
    }
}

export default function ShowsPage(props) {

    const router = useRouter()
    
    const renderList = () => {
        return props.shows.slice(0, 6).map(show => (
            <ShowThumbnail 
                key={show.id} 
                show={show} 
                href={`/[country]/[showId]`}
                as={`/${props.country}/${show.id}`}
            />   
        ))
    }

    return (
            <>
            <Head>
                <title>TeleTV - Shows</title>
            </Head>

            <div className="shows-container">
            <h1 className="shows-container__title">Available shows</h1>
                <span>Select the one you like the most</span>
                <div className="shows-display">
                    {
                        !router.isFallback ?
                        renderList()
                        : <p> Loading content...</p>
                    }
                    
                </div>
            </div>

            <style jsx>
                {`
                .shows-container {
                    margin-top:5rem;
                    display:flex;
                    flex-direction: column;
                    text-align:center;
                    flex-wrap:wrap;
                    justify-content:space-between;
                }
                .shows-container__title {
                        margin: 0 0 .5rem 0;
                }
                .shows-display {
                    margin-top:5rem;
                    display:flex;
                    flex-wrap:wrap;
                    justify-content:space-between;
                }
                `}
            </style>

        </>
    )
}

