//========> COMPONENTS 
import TheHeader from '../TheHeader/TheHeader'
import TheFooter from '../TheFooter/TheFooter'


export default function Layout({ children }) {
    return (
        <>
            <TheHeader />
                <div className="content-container">
                  {children}
                </div>
            <TheFooter />

            <style jsx>
                {`
                .content-container {
                    width:90%;
                    max-width: 120rem;
                    margin: 0 auto;
                }
                `}
            </style>
        </>
    )
}