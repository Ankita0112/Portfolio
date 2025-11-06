import React from "react";
import { Timeline } from "./ui/Timeline";
import Link from "next/link";
import { cn } from "@/lib/utils";


// --- Data for your experiences ---
// I've structured this data to be cleaner and easier to manage.
export const experiences = [
	{	
		slug: "linux-foundation",
		company: "The Linux Foundation",
		role: "Open Source Intern",
		date: "June 2025 – Present",
		location: "Remote",
		description: `At The Linux Foundation I built a data integration pipeline connecting Canvas LMS to a blockchain-based credentialing system (Hyperledger). The work included designing data extraction flows, mapping grade and course data to token issuance rules, and implementing secure, reusable Node.js services for onboarding and processing.`,
		images: [
			{ src: "/eventFlyerLFDT.avif", href: "https://youtu.be/JaWJ2sEJmXQ?si=5YDDAgeqWksUHJbd" },
			{ src: "/PullRequest.png", href: "https://github.com/hyperledger-labs/learning-tokens/pull/158/files" },
		],
		points: [
			"Created a scalable data pipeline between Canvas LMS and Hyperledger’s Learning Tokens system, enabling automated issuance of blockchain-based credentials based on student performance data.",
			"Researched, tested, and documented Canvas LMS API endpoints, and developed backend services using Node.js and Express to retrieve structured course, user, and grade data - mapping it to token reward logic aligned with decentralized identity standards."
		],
		icon: (
			<img
				src="/LFX.png"
				alt="The Linux Foundation Logo"
				className="h-8 w-8 md:h-20 md:w-20  object-contain"
			/>
		),
	},
	{
		slug: "amazon-ml-summer-school",
		company: "Amazon",
		role: "Amazon ML Summer School Student",
		date: "August 2025 – August 2025",
		location: "Remote",
		description: `Intensive, competitive program covering supervised learning, deep learning, probabilistic models and reinforcement learning. Built mini-projects and learned ML engineering best practices from Amazon scientists and engineers.`,
		images: [{ src: "/amazonML.png", href: "https://drive.google.com/file/d/1j-0k_uYhy-LCjCl9mC_gC7QC33nCAnSh/view?usp=sharing" },
			{ src: "/AmazonMLSSgoodie.jpeg", href: "https://drive.google.com/file/d/1j-0k_uYhy-LCjCl9mC_gC7QC33nCAnSh/view?usp=sharing" }
		],
		points: [
			"Selected among 3,000 students across India for Amazon ML Summer School, a competitive program focused on core machine learning concepts including supervised learning, deep learning, probabilistic models, and reinforcement learning.",
			"Strengthened technical foundation through hands-on sessions, case studies, and mentorship from Amazon ML scientists."
		],
		icon: (
			<img
				src="/Amazon.png"
				alt="Amazon Logo"
				className="h-8 w-8 md:h-20 md:w-20  object-contain"
			/>
		),
	},
	// {
	// 	slug: "lenovo",
	// 	company: "Lenovo",
	// 	role: "Data Analytics Intern",
	// 	date: "July 2025 – August 2025",
	// 	location: "Remote",
	// 	points: [
	// 		"Interned at Lenovo under the Data Analytics program, gaining hands-on experience with Advanced Excel, Tableau, and Google Looker Studio for data cleaning, visualization, and dashboard creation.",
	// 		"Worked with real-world datasets to extract insights and present them effectively through analytical dashboards and visual storytelling techniques."
	// 	],
	// 	icon: (
	// 		<a
	// 			// href="https://www.servicenow.com/"
	// 			target="_blank"
	// 			rel="noopener noreferrer"
	// 		>
	// 			<img
	// 				src="/lenovo.png"
	// 				alt="Lenovo Logo"
	// 				className="h-8 w-8 md:h-20 md:w-20  object-contain"
	// 			/>
	// 		</a>
	// 	),
	// },
	{
		slug: "jpmc-generation-tech",
		company: "JP Morgan Chase & Co.",
		role: "Generation Tech Hackathon Finalist",
		date: "May 2025 – May 2025",
		location: "Remote",
		description: `Designed EconoVision, a prototype focused on inclusive job access and skill-building. I led the UI/UX prototype and nomination to finals involved thorough research and iteration based on accessibility and multilingual requirements.`,
		// images: [
		// 	"/eventFlyerLFDT.avif",
		// 	"/project_images/linux-foundation-2.jpg",
		// ],
		images: [
			{ src: "/jpmcGoodies.jpg", href: "https://drive.google.com/file/d/1C950KfMxRHyugSKmVorqeCmnKQNrSWYA/view?usp=sharing" },
			{ src: "/jpmcProject.png", href: "https://app.moqups.com/1OnbRp1MlBZ0uxOAawel3laFXKjhT5D5/view/page/ad64222d5" },
		],
		points: [
			"Designed a high-fidelity UI/UX prototype in Moqups for EconoVision - a digital platform aimed at promoting decent work and economic growth by offering inclusive access to job opportunities, skill-building micro-courses, a multilingual interface, and tailored support for people with disabilities.",
			"Achieved finalist position out of 51 teams."
		],

		icon: (
			<img
				src="/JPMC.jpeg"
				alt="JP Morgan Chase & Co. Logo"
				className="h-8 w-8 md:h-20 md:w-20 object-contain"
			/>
		),
	},
	{
		slug: "amazon-future-engineer",
		company: "Amazon",
		role: " Amazon Future Engineer",
		date: "March 2025 – Present",
		location: "Remote",
		description: `Scholarship program focused on foundational computer science and DSA. Completed many hands-on coding challenges and interview preparation modules.`,
		images: ["/AFE.png",
			{ src: "/AFEcertificate.png", href: "https://drive.google.com/file/d/11qftmBVrGuLwRi6lX8wn-Vd9tlDsGc4j/view?usp=sharing" },
			// "/AFEcertificate.png"
			// https://drive.google.com/file/d/11qftmBVrGuLwRi6lX8wn-Vd9tlDsGc4j/view?usp=sharing
		],
		points: [
			"Selected among 500 students across India for a competitive Amazon-funded scholarship program aimed at advancing technical skills in software development.",
			"Mastered core Data Structures and Algorithms (DSA) concepts through hands-on coding challenges and problem-solving exercises.",
		],

		icon: (
			<img
				src="/Amazon.png"
				alt="YahWeh Solutions Logo"
				className="h-8 w-8 md:h-20 md:w-20 object-contain"
			/>
		),
	},
	{
		slug: "paypal-career-academy",
		company: "PayPal",
		role: "PayPal Career Academy",
		date: "March 2025 – August 2025",
		location: "Remote",
		description: `Selective program for early-career technologists — focused on interview preparation, career coaching, and building a professional network. I gained mentorship and worked on mock interviews and personal branding.`,
		images: [
			{ src: "/PayPalCertificate.JPG", href: "https://drive.google.com/file/d/1MbReu2WURwaff9kf0MM0_-IIBfHEjfOw/view?usp=sharing" },
			{ src: "/PayPalPresentationImage.png", href: "https://drive.google.com/file/d/1b3f7JzyCzeyGeGa4FRvQEgYBuMIggj1q/view?usp=sharing" },
		],
		points: [
			"Selected among 30 students across India for the PayPal Career Academy, a selective program for first-generation students focused on building technical and professional skills, including technical interview prep, personal branding, networking strategies, and LinkedIn optimization.",
			"Enhanced interview readiness through mock interviews and guidance provided by my mentor.",
		],

		icon: (
			<img
				src="/PayPal.png"
				alt="PayPal Logo"
				className="h-8 w-8 md:h-20 md:w-20 object-contain"
			/>
		),
	},
];

export function Experience() {
	const timelineData = experiences.map((exp) => ({
		title: exp.date,
		content: <ExperienceCard {...exp} />,
	}));

	return (
		<div id="experience" className="relative w-[100vw] overflow-clip  h-[fit] p-4 md:p-8">
			<h1 className="heading">
				My
				<span className="text-purple"> Professional Journey</span>
			</h1>
			<Timeline data={timelineData} />
		</div>
	);
}

// --- A new, more attractive component for rendering each experience ---

const ExperienceCard = ({
	slug,
	company,
	role,
	location,
	points,
	icon,
	date,
}: {
	slug: string;
	company: string;
	role: string;
	location: string;
	points: string[];
	icon: React.ReactNode;
	date: string;
}) => (
	<Link href={`/experience/${slug}`} className="w-full group/card">
		{/* <a > */}
			<div
				className={cn(
					"cursor-pointer overflow-hidden relative card h-[fit] rounded-xl shadow-[0_0_60px_10px_rgba(59,130,246,0.3)] shadow-blue-200/40 dark:shadow-blue-900/40 border border-neutral-200 dark:border-neutral-800 w-full mx-auto backgroundImage flex flex-col p-4",
					"bg-[url('/bg.png')] bg-cover"
				)}
			>
				<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
				<div className="flex flex-row items-center space-x-4 z-10 ">
					<div className="flex h-10 w-10 md:h-22 md:w-22  items-center justify-center object-cover">
						{icon}
					</div>
					<div className="flex flex-col">
						<p className="font-normal text-base md:text-lg text-gray-50 relative z-10">
							{company}
						</p>
						<p className="text-sm md:text-base text-gray-400">{role}</p>

						<div className="flex flex-col  md:flex-row md:items-center gap-1 md:gap-2 mt-0.5">
							<p className="text-sm md:text-base text-gray-300">{location}</p>
							<p className="text-sm md:text-base text-gray-300 hidden md:block">
								|
							</p>
							<p className="text-sm md:text-base text-gray-300">{date}</p>
						</div>
					</div>
				</div>
				<div className="text content z-10 ">
					<ul className="list-none space-y-3 mt-4">
						{points.map((point, index) => (
							<li key={index} className="flex items-start gap-3">
								<CheckIcon />
								<p className="text-base text-gray-50">{point}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		{/* </a> */}
	</Link>
);
// Utility for className merge (from shadcn/ui)

// --- Icon Components ---
function BriefcaseIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="h-6 w-6 text-blue-600 dark:text-blue-400"
		>
			<path
				fillRule="evenodd"
				d="M7.5 5.25A2.25 2.25 0 019.75 3h4.5a2.25 2.25 0 012.25 2.25v.75a.75.75 0 01-1.5 0v-.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 00-.75.75v.75a.75.75 0 01-1.5 0v-.75z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3.75 8.25A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 00-.75-.75H6a.75.75 0 00-.75.75v12a.75.75 0 00.75.75h12a.75.75 0 00.75-.75v-1.5a.75.75 0 011.5 0v1.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V8.25z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function CheckIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="mt-1 h-4 w-4 flex-shrink-0 text-blue-500 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]"
		>
			<path
				fillRule="evenodd"
				d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
				clipRule="evenodd"
			/>
		</svg>
	);
}
