import Link from "next/link";

function Navigation() {
	return (
		<nav className="nav">
			<div className="nav__brand">
				<Link className="nav__brand_link" href="/">
					<span>BEV</span>
				</Link>
			</div>
			<div className="nav__menue">
				<Link className="nav__menue_link" href="/">
					<span className="hover-line">Home</span>
				</Link>
				<Link className="nav__menue_link" href="/cars">
					<span className="hover-line">Cars</span>
				</Link>
				<Link className="nav__menue_link" href="/about">
					<span className="hover-line">About</span>
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
