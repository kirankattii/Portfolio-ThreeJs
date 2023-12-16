import { meta, shopify, starbucks, tesla } from "../assets/images"
import {
	car,
	contact,
	css,
	estate,
	express,
	git,
	github,
	html,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
} from "../assets/icons"

export const skills = [
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: motion,
		name: "Motion",
		type: "Animation",
	},
	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: nextjs,
		name: "Next.js",
		type: "Frontend",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
]

export const experiences = [
	{
		title: "Junior Software Developer",
		company_name: "Freelance",
		icon: starbucks,
		iconBg: "#accbe1",
		date: "May 2023 - Dec 2023 ",
		points: [
			"Experienced freelance frontend developer with a strongcommand of HTML5, CSS, JavaScrip, React Js, NodeJs and MongoDB. ",
			"Proven track record of delivering visually appealing and user-friendly websites for clients across various industries.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Frontend Developer Internship",
		company_name: "DevTown",
		icon: tesla,
		iconBg: "#fbc3bc",
		date: "Jan 2023 - Apr 2023 ",
		points: [
			"Frontend Development Intern, DevTown.",
			"I assisted in the development of responsive web applicationsusing HTML, CSS, JavaScript, ReactJS, NodeJs, and MongoDB.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Collaborated with senior developers to implement user interfaces and fix bugs.",
		],
	},
	// {
	// 	title: "Web Developer",
	// 	company_name: "Shopify",
	// 	icon: shopify,
	// 	iconBg: "#b7e4c7",
	// 	date: "Jan 2022 - Jan 2023",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
	// {
	// 	title: "Full stack Developer",
	// 	company_name: "Meta",
	// 	icon: meta,
	// 	iconBg: "#a2d2ff",
	// 	date: "Jan 2023 - Present",
	// 	points: [
	// 		"Developing and maintaining web applications using React.js and other related technologies.",
	// 		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
	// 		"Implementing responsive design and ensuring cross-browser compatibility.",
	// 		"Participating in code reviews and providing constructive feedback to other developers.",
	// 	],
	// },
]

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/YourGitHubUsername",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/YourLinkedInUsername",
	},
]

export const projects = [
	{
		iconUrl: car,
		theme: "btn-back-red",
		name: "Taxi Booking App",
		description:
			"In this application development, users could book their vehicle from their current location to a desired destination, seamlessly navigating through Google Maps.",
		link: "https://github.com/kirankattii/taxi-booking-app/tree/main",
	},
	{
		iconUrl: threads,
		theme: "btn-back-green",
		name: "Full Stack Blogging App",
		description:
			"Created an advanced blogging application that makes it easy to create, modify, and comment on blogs. Using the Mern stack (MongoDB, Express, React.js).",
		link: "https://github.com/kirankattii/Fullstack-App",
	},
	{
		iconUrl: summiz,
		theme: "btn-back-blue",
		name: "Multiplayer video game",
		description:
			"Developed a multiplayer video game using Three.js and React, showcasing proficiency in front-end technologies. Successfully integrated real-time multiplayer functionality, demonstrating strong problem-solving skills.",
		link: "https://github.com/adrianhajdin/project_next13_car_showcase",
	},
	{
		iconUrl: snapgram,
		theme: "btn-back-pink",
		name: "Full Stack video streaming App",
		description:
			"maintaining video streaming and OTT video commerce. Demonstrated success in optimizing video delivery, enhancing user interfaces, and increasing user engagement. ",
		link: "https://github.com/kirankattii/video-streming-app",
	},
	// {
	// 	iconUrl: estate,
	// 	theme: "btn-back-black",
	// 	name: "Real-Estate Application",
	// 	description:
	// 		"Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
	// 	link: "https://github.com/adrianhajdin/projects_realestate",
	// },
	// {
	// 	iconUrl: summiz,
	// 	theme: "btn-back-yellow",
	// 	name: "AI Summarizer Application",
	// 	description:
	// 		"App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
	// 	link: "https://github.com/adrianhajdin/project_ai_summarizer",
	// },
]
