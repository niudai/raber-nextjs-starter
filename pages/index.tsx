import { Canvas } from "@raber/react";
import "../components";
import pageData from "../components/home.json";


export default function Home({ data }: any) {
    return (
        <main>
            <Canvas data={pageData} id="home" readonly={true}></Canvas>
        </main>
    )
}

