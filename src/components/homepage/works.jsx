import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./CTFC_Logo (1)-1.png"
								alt="Impact-Infotech"
								className="work-image"
							/>
							<div className="work-title">CTFC</div>
							<div className="work-subtitle">
								Full Stack Developer
							</div>
							<div className="work-duration">2020 - 2022</div>
						</div>

						<div className="work">
							<img
								src="./wip.jpg"
								alt="wipro"
								className="work-image"
							/>
							<div className="work-title">Wipro</div>
							<div className="work-subtitle">
								Software Developer
							</div>
							<div className="work-duration">2022 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
