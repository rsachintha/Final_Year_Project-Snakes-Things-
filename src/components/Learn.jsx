import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import wiki from "../assets/wiki.png";
import SectionWrapper from "../hoc/SectionWrapper";
import { facts } from "../constants";
import { steps } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const KnowledgeCard = ({
	index,
	name,
	description,
	danger,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full sm:h-[680px] h-[650px]"
			>
				<div className="relative w-full h-[230px]">
					<img
						src={image}
						alt="snake_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={wiki}
								alt="source code"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px] text-center">
						{name}
					</h3>
					<p className="mt-2 text-secondary text-[14px] text-justify">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{danger.map((danger) => (
						<p
							key={`${name}-${danger.name}`}
							className={`text-[14px] ${danger.color} font-bold`}
						>
							{danger.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};

const Learn = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={`${styles.sectionHeadText}`}>Some Facts</h2>
			</motion.div>

			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					There are so many species of snakes around the world and they are so
					hard to identify because of their unique similarities. And here you
					can get an idea regarding world's most venomous top three snake
					species and world's top three non-venomous snake species. So, danger
					ahead!
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{facts.map((fact, index) => (
					<KnowledgeCard key={`fact-${index}`} index={index} {...fact} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Learn, "learn");
