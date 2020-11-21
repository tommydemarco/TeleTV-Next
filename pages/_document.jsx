import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocumentBoilerplate extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script src="https://use.fontawesome.com/bc2438d946.js"></script>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}