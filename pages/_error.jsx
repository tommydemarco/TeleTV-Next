//=========> COMPONENTS 
import Layout from '../components/Layout/Layout'

export default function CustomError({ statusCode, message }) {
    const errorMessage = message || "There was a problem"
    return (
        <Layout>
        <div className="error-page">
            <h1>{statusCode}</h1>
            <h3>
                {errorMessage} <br/>
                Try again later
            </h3>
        </div>

        <style jsx>
            {`
            .error-page {
                margin: 4rem 0 2rem 0;
                text-align:center;
            }
            `}
        </style>
        </Layout>
    )
}