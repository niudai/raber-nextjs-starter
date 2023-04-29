import { Canvas, getPage } from "@raber/react";
import { GetStaticProps } from "next";
import "../components";

export interface NavItem {
    name: string;
    link: string;
}

function Page({ pageId, data }: any) {
    // render page
    return (
        <div>
            <Canvas data={data} id={pageId}></Canvas>
        </div>
    );
}

export default Page;

export async function getStaticPaths() {

    const pageIds =
        ["product",
            "service",
            "promotions",
            "special-offers",
            "events",
            "contests",
            "contact-us",
            "about-us",
            "blog",
            "faq"
        ]

    console.log(pageIds);

    const docs = pageIds.map(n => {
        return {
            params: {
                pageId: n
            }
        }
    })

    return {
        paths: docs,
        fallback: false, // can also be true or 'blocking'
    }

}

export const getStaticProps: GetStaticProps<{}> = async (context) => {
    const { pageId } = context.params as { pageId: string };
    const data = await getPage(pageId);
    return { props: { data, pageId } };
}
