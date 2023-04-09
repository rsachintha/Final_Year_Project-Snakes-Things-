import { motion } from "framer-motion";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { treatments } from "../constants/index";
import { textVariant } from "../utils/motion";

const TreatmentCard = ({ treatment }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={treatment.date}
			iconStyle={{ background: treatment.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<img
						src={treatment.icon}
						alt={treatment.title}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div>
				<h3 className="text-white text-[24px] font-bold">{treatment.title}</h3>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{treatment.points.map((point, index) => (
					<li
						key={`treatment-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Treatments = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<h2 className={styles.sectionHeadText}>Paramedic Guidelines</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{treatments.map((treatment, index) => (
						<TreatmentCard key={`treatment-${index}`} treatment={treatment} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Treatments, "treatments");
