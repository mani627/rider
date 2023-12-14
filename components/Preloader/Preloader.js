import { useEffect, useState } from "react";

export default function Preloader() {
	const [showLoader, setShowLoader] = useState(true);
	const [isLoded, setIsLoded] = useState(null);

	useEffect(() => {
		window.addEventListener("load", () => {
			setIsLoded("loaded");
		});

		const timer = setTimeout(() => {
			setShowLoader(false);
		}, 1000);

		return () => clearTimeout(timer);
	});
	return (
		showLoader && (
			<div id="preloader" className={`preloader ${isLoded}`}>
				<div className="animation-preloader">
					<div className="spinner"></div>
					<div className="txt-loading">
						<span data-text-preloader="R" className="letters-loading">
							R
						</span>
						<span data-text-preloader="i" className="letters-loading">
							i
						</span>
						<span data-text-preloader="d" className="letters-loading">
							d
						</span>
						<span data-text-preloader="e" className="letters-loading">
							e
						</span>
						<span data-text-preloader="r" className="letters-loading">
							{" "}
						</span>
						<span data-text-preloader="r" className="letters-loading">
							A
						</span>
						<span data-text-preloader="r" className="letters-loading">
							p
						</span>
						<span data-text-preloader="r" className="letters-loading">
							p
						</span>
					</div>
					<p className="text-center">Starting....</p>
				</div>
				<div className="loader">
					<div className="row">
						<div className="col-3 loader-section section-left">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-left">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"></div>
						</div>
						<div className="col-3 loader-section section-right">
							<div className="bg"></div>
						</div>
					</div>
				</div>
			</div>
		)
	);
}
