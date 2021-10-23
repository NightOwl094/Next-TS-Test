import Head from "next/head";

export type HeadMetaDataProps = {
    title?: string,
}

const HeadMetaData = (
    {title}: HeadMetaDataProps
) => {
    return <>
        <Head>
            <title>{title}</title>

            <meta
                name={"viewport"}
                content={"initial-scale=1.0, width=device-width"}
            />

            <meta charSet={"utf-8"}/>

            <>
                <meta
                    aria-label={"검색 엔진에 의해 검색되는 단어"}
                    name={"Keywords"}
                    content={"Searched Word"}
                />
                <meta
                    aria-label={"검색 결과에 표시되는 문자"}
                    name={"Description"}
                    content={"Result Words"}
                />
            </>

            <>
                <meta
                    aria-label={"facebook title"}
                    property={"og:title"}
                    content={"og title"}
                />
                <meta
                    aria-label={"facebook image"}
                    property={"og:image"}
                    content={"logo.png"}
                />
                <meta
                    aria-label={"facebook description"}
                    property={"og:description"}
                    content={"og description"}
                />
            </>
            <>
                <meta
                    name={"twitter:title"}
                    content={"twitter title"}
                />
            </>
            <>
                <link
                    aria-label={"3 Generation iPad high-resolution Retina display"}
                    rel="apple-touch-icon-precomposed"
                    sizes={"144x144"}
                    href={"logo.png"}
                />
                <link
                    aria-label={"iPhone high-resolution Retina display"}
                    rel="apple-touch-icon-precomposed"
                    sizes={"114x114"}
                    href={"logo.png"}
                />
                <link
                    aria-label={"1,2 Generation iPad"}
                    rel="apple-touch-icon-precomposed"
                    sizes={"72x72"}
                    href={"logo.png"}
                />
                <link
                    aria-label={"non-Retina iPhone, iPod Touch, Android"}
                    rel="apple-touch-icon-precomposed"
                    href={"logo.png"}
                />

                <link
                    rel="shortcut icon"
                    href={"logo.png"}
                    type={"image/x-icon"}
                />
            </>
        </Head>
    </>
}

HeadMetaData.defaultProps = {
    title: "default title test"
}

export default HeadMetaData
