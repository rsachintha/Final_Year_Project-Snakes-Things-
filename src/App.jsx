import { BrowserRouter } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Identification from "./components/Identification";
import Learn from "./components/Learn";
import Services from "./components/Services";
import Treatments from "./components/Treatments";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<Services />
				<Treatments />
				<Learn />
				<div className="relative z-0">
					<Identification />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
