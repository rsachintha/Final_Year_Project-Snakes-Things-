import { motion } from "framer-motion";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { steps } from "../constants/index";
import { textVariant } from "../utils/motion";

const StepsCard = ({ step }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			iconStyle={{ background: step.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={step.icon}
						alt={step.title}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{step.title}</h3>
			</div>

			<p className="mt-5 list-disc ml-5 space-y-2">{step.points}</p>
		</VerticalTimelineElement>
	);
};

const Steps = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>
					How to Tell if a Snake is Potentially Venomous in 4 Steps
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{steps.map((step, index) => (
						<StepsCard key={`step-${index}`} step={step} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Steps, "steps");
