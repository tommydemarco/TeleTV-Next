import axios from 'axios'
import Error from 'next/error'
//=======> COMPONENTS 
import Layout from '../../components/Layout/Layout'
import ShowDetails from '../../components/ShowDetails/ShowDetails'

export const getServerSideProps = async (context) => {

    const showId = context.query.showId
    const url = `https://api.tvmaze.com/shows/${showId}?embed=cast`

    let show

    try {
        const response = await axios.get(url)
        show = response.data  
    } catch(err) {
        console.log(err)
        show = null
    }

    return { props: { show }}
}

const showId = ({ show }) => {

    if (!show) {
        return <Error statusCode={503} />
    }

    return (
        <Layout>
            <div className="show-container">
                <ShowDetails show={show} />
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

export default showId
