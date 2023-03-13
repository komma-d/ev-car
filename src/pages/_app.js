// import "@/styles/globals.css";
import "node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Navigation />
			<Component {...pageProps} />
		</>
	);
}
