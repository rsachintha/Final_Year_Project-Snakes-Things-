import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import SnakeCanvas from "./canvas/Snake1";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5"></div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Welcome, to{" "}
						<span className="text-[#915eff]">The Reptiles World</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						Explore, identify and get educated regarding snake species around
						the world with us.
					</p>
				</div>
			</div>

			<SnakeCanvas />

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#services">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
