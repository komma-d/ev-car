import Link from "next/link";
function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link href="/">
					<span className="navbar-brand">My Next.js App</span>
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link href="/">
								<span className="nav-link">Home</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/cars">
								<span className="nav-link">Cars</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/about">
								<span className="nav-link">About</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
