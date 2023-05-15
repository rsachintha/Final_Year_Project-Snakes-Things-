import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import CanvasTwo from "./canvas/Snake2";
import SectionWrapper from "../hoc/SectionWrapper";
import { slideIn } from "../utils/motion";
import Modal from "./Modal";
import axios from "axios";

const Identification = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [disable, setDisable] = useState(false);
	const [file, setFile] = useState(null);
	const [data, setData] = useState(null);
	const [msg, setMsg] = useState(null);
	const [danger, setIsDanger] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		const data = new FormData();
		data.append("imagefile", file);
		const config = {
			headers: {
				"content-type": "multipart/form-data",
			},
		};
		const url = "http://localhost:3000/predict";
		axios
			.post(url, data, config)
			.then((response) => {
				console.log(response.data);
				setData(response.data);
				setIsOpen(true);
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

	const isValidFileUploaded = (file) => {
		const validExtensions = ["png", "jpeg", "jpg"];
		const fileExtension = file.type.split("/")[1];
		return validExtensions.includes(fileExtension);
	};

	const handleChange = (e) => {
		const file = e.target.files[0];
		if (isValidFileUploaded(file)) {
			setMsg("Valid file uploaded!");
		} else {
			setIsDanger(true);
			setMsg("Invalid file uploaded!");
		}
		setFile(e.target.files[0]);
		setDisable(true);
	};

	return (
		<>
			{isOpen ? (
				<Modal setIsOpen={setIsOpen} data={data}></Modal>
			) : (
				<>
					<div
						className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
					>
						<motion.div
							variants={slideIn("left", "tween", 0.2, 1)}
							className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
						>
							<h3 className={styles.sectionHeadText}>Let's Identify It Here</h3>

							<form
								className="mt-12 flex flex-col gap-8"
								// encType="multipart/form-data"
								onSubmit={handleSubmit}
							>
								{disable ? (
									<label className="flex flex-col rounded-xl uppercase bg-tertiary text-center px-10 py-3 shadow-md shadow-primary">
										<span className="text-white font-medium">
											File Uploaded
										</span>
										<input
											disabled
											name="imagefile"
											className="hidden"
											// className="shadow-md shadow-primary bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
											type="file"
											onChange={handleChange}
										/>
									</label>
								) : (
									<label className="flex flex-col rounded-xl uppercase green-pink-gradient text-center px-10 py-3 shadow-md shadow-primary cursor-pointer">
										<span className="text-white font-medium">Upload File</span>
										<input
											name="imagefile"
											className="hidden"
											type="file"
											onChange={handleChange}
										/>
									</label>
								)}
								{danger ? (
									<label className="text-red-500">{msg}</label>
								) : (
									<label className="text-green-500">{msg}</label>
								)}
								{isLoading ? (
									<button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
										Predicting...
									</button>
								) : (
									<button
										type="submit"
										className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
									>
										Click to Predict
									</button>
								)}
							</form>
						</motion.div>

						<motion.div
							variants={slideIn("right", "tween", 0.2, 1)}
							className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
						>
							<CanvasTwo />
						</motion.div>
					</div>
				</>
			)}
		</>
	);
};

export default SectionWrapper(Identification, "identification");
