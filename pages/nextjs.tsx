import { Canvas, getPage } from "@raber/react";

export async function getStaticProps() {
	const data = await getPage('nextjs');
	return { props: { data }, }
}

export default function NextJS({ data }: any) {
	return (
		<main>
			<h1>Welcome to Next.js</h1>
			<Canvas data={data} id="nextjs"></Canvas>
		</main>
	)
}