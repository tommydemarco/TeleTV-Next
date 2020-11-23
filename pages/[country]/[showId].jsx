import axios from 'axios'
import Error from 'next/error'
import CustomError from '../_error'
//=======> COMPONENTS 
import Layout from '../../components/Layout/Layout'
import ShowDetails from '../../components/ShowDetails/ShowDetails'

export const getServerSideProps = async (context) => {

    const showId = context.query.showId
    const url = `https://api.tvmaze.com/shows/${showId}?embed=cast`

    let show
    let statusCode = null

    try {
        const response = await axios.get(url)
        show = response.data  
    } catch(err) {
        statusCode = err.response ? err.response.status : 400
        show = null
    }

    return { props: { show, statusCode }}
}

const showId = ({ show, statusCode }) => {

    if (statusCode) {
        return <CustomError statusCode={statusCode} message="There was an error" />
    }

    return (
        <Layout>
            <div className="show-container">
                <ShowDetails show={show} />
            </div>

            <style jsx>
                {`
                .show-container {
                    margin-top:5rem;
                }
                `}
            </style>

        </Layout>
    )
}

export default showId
