import React from "react";
import image from "../assets/modal.png";

function Modal(props) {
	return (
		<div className="w-[500px] h-[500px] rounded-xl bg-secondary shadow-md flex flex-col p-6 ml-[330px] backdrop-blur-sm">
			<div className="flex justify-end">
				<button
					className="bg-transparent border-none text-2xl cursor-pointer text-primary font-bold"
					onClick={() => {
						props.setIsOpen(false);
					}}
				>
					X
				</button>
			</div>
			<div className="block text-center text-3xl mt-3 font-semibold">
				<h1>Predicted Snake Species Is,</h1>
				<img
					src={image}
					alt="modal_img"
					className="object-cover opacity-80 tra"
				/>
			</div>
			<div className=" flex-[50%] flex justify-center items-center text-center text-2xl font-bold text-primary">
				<p>{props.data}</p>
			</div>
		</div>
	);
}

export default Modal;
