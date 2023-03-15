import "@/styles/styles.scss";
import Navigation from "../components/Navigation";
import Icons from "@/components/Icons";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navigation />
			<Component {...pageProps} />
			<Icons />
		</>
	);
}
