import React from 'react';
import { DiDjango } from 'react-icons/di';
import { DiMongodb } from 'react-icons/di';
import { FaNode } from 'react-icons/fa';
import {
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaReact,
	FaPython,
	FaSass,
} from 'react-icons/fa';

const Skills = () => {
	return (
		<div className='container-fluid' id='skills'>
			<div className='container'>
				{/* <h2>Skills</h2>   */}
				<div className='skill-list'>
					<p>
						<FaHtml5 style={{ color: '#e34c26' }} />
					</p>
					<p>
						<FaCss3Alt style={{ color: '#264de4' }} />
					</p>
					<p>
						<FaBootstrap style={{ color: '#9B51E0' }} />
					</p>
					<p>
						<FaReact style={{ color: '#61DBFB' }} />
					</p>
					<p>
						<FaPython style={{ color: '#4B8BBE' }} />
					</p>
					<p>
						<DiDjango style={{ color: '#092e20' }} />
					</p>
					<p>
						<FaNode style={{ color: '#68a063' }} />
					</p>
					<p>
						<DiMongodb style={{ color: '#68a063' }} />
					</p>
					<p>
						<FaSass style={{ color: '#c69' }} />
					</p>
					{/*<p><SiTailwindcss style={{color: '#60A5FA'}}/></p> */}
				</div>
			</div>
		</div>
	);
};

export default Skills;
