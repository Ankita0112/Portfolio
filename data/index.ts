export const navItems = [
	{ id: "1", name: "Home", link: "#home" },
	{ id: "2", name: "About", link: "#about" },
	{ id: "3", name: "Skills", link: "#skills" },
	{ id: "4", name: "Projects", link: "#projects" },
	{ id: "5", name: "Experience", link: "#experience" },
	{ id: "6", name: "Contact", link: "#contact" },
];

export const gridItems = [
	{
		id: 1,
		title:
			" I love tackling challenges and continuously evolving in the dynamic tech space",
		description: "",
		className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
		imgClassName: "w-full h-full opacity-70",
		titleClassName: "justify-end",
		img: "/grid/b3.jpg",
		spareImg: "",
	},
	{
		id: 2,
		title: "Next.js: My Playground for Web Innovation",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "",
		spareImg: "",
	},
	{
		id: 3,
		title: "My tech stack",
		description: "I constantly try to improve",
		className: "lg:col-span-2 md:col-span-3 md:row-span-2",
		imgClassName: "",
		titleClassName: "justify-center",
		img: "",
		spareImg: "",
	},
	{
		id: 4,
		title: "Tech enthusiast with a passion for development.",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-start",
		img: "/grid/grid.svg",
		spareImg: "/grid/b4.svg",
	},
	{
		id: 5,
		title: "Exploring the Core of Problem-Solving: DSA in Focus",
		description: "The Inside Scoop",
		className: "md:col-span-3 md:row-span-2",
		imgClassName: "absolute right-0 bottom-0 md:w-[35rem] w-[20rem] opacity-65",
		titleClassName: "mt-20 items-start",
		img: "/grid/b6.png",
		spareImg: "/grid/grid.svg",
	},
	{
		id: 6,
		title: "Do you want to start a project together?",
		description: "",
		className: "lg:col-span-2 md:col-span-3 md:row-span-1",
		imgClassName: "",
		titleClassName: "justify-center md:max-w-full max-w-60 text-center",
		img: "",
		spareImg: "",
	},
];

export const projects = [
	{
		id: 1,
		title: " Dish Craft",
		des: "Recipe management platform to browse, create, edit, and favorite recipes.",
		img: "/project_images/dishCraft.png",
		iconLists: [
			"/icons/JavaScript.svg",
			"/icons/React.svg",
			"/icons/Tailwind CSS.svg",
			"/icons/MongoDB.svg",
			"/icons/Firebase.svg",
			"/icons/redux.svg",
		],
		link: "https://github.com/Ankita0112/Dish-Craft",
	},
	{
		id: 2,
		title: " Encrypted Chat",
		des: "An end-to-end encrypted real-time chat application built using FastAPI.",
		img: "/project_images/EncryptedChat.png",
		iconLists: [
			"/icons/Tailwind CSS.svg",
			"/icons/JavaScript.svg",
			"/icons/FastAPI.svg",
			"/icons/Python.svg",
			// "/icons/scikit-learn.svg",
			// "/icons/seaborn.svg",
		],
		link: "https://github.com/Ankita0112/Movie-review-analysis",
	},
	// {
	// 	id: 2,
	// 	title: "Movie Review Analysis",
	// 	des: "NLP sentiment analysis of IMDb reviews with classification and insights.",
	// 	img: "/project_images/MovieReviewAnalysis.png",
	// 	iconLists: [
	// 		"/icons/Pandas.svg",
	// 		"/icons/Matplotlib.svg",
	// 		"/icons/NumPy.svg",
	// 		"/icons/Python.svg",
	// 		"/icons/scikit-learn.svg",
	// 		"/icons/seaborn.svg",
	// 	],
	// 	link: "https://github.com/Ankita0112/Movie-review-analysis",
	// },
	{
		id: 3,
		title: " Chat Bot",
		des: "AI chatbot with Google Gemini API, React.js UI, deployed on Netlify.",
		img: "/project_images/chatbot.png",
		iconLists: [
			"/icons/React.svg",
			"/icons/Node.js.svg",
			"/icons/JavaScript.svg",
		],
		link: "https://github.com/Ankita0112/ChatBot",
	},
	{
		id: 4,
		title: "Innovative Portfolio with Next.js, Three.js, and Tailwind CSS",
		des: "Portfolio showcasing my introduction, experiences, projects, and technologies.",
		img: "/project_images/portfolio.png",
		iconLists: [
			"/icons/Next.js.svg",
			"/icons/Tailwind CSS.svg",
			"/icons/Three.js.svg",
			"/icons/Node.js.svg",
		],
		link: "https://ankita0112.netlify.app/",
	},
];


export const socialMedia = [
	{
		id: 1,
		img: "/git.svg",
		link: "https://github.com/Ankita0112",
	},
	{
		id: 2,
		img: "/leetcode.svg",
		link: "https://leetcode.com/u/ankita011205/",
	},
	{
		id: 3,
		img: "/link.svg",
		link: "https://www.linkedin.com/in/ankita0112/",
	},
];

export const techStack = [
	// { svg: "/icons/TypeScript.svg" },
	{ svg: "/icons/React.svg" },
	// { svg: "/icons/seaborn.svg" },
	{ svg: "/icons/Node.js.svg" },
	{ svg: "/icons/Express.svg" },
	// { svg: "/icons/AWS.svg" },
	{ svg: "/icons/Tailwind CSS.svg" },
	{ svg: "/icons/JavaScript.svg " },
	{ svg: "/icons/PostgresSQL.svg" },
	{ svg: "/icons/MongoDB.svg" },
	{ svg: "/icons/HTML5.svg" },
	{ svg: "/icons/CSS3.svg" },
	// { svg: "/icons/Flask.svg" },
	// { svg: "/icons/Three.js.svg" },
	// { svg: "/icons/Nodemon.svg" },
	// { svg: "/icons/Seismic.svg" },
];

export const languagesAndTools = [
	// { svg: "/icons/Git.svg" },
	{ svg: "/icons/GitHub.svg" },
	// { svg: "/icons/Firebase.svg" },
	// { svg: "/icons/NPM.svg" },
	{ svg: "/icons/MySQL.svg" },
	// { svg: "/icons/Mongoose.js.svg" },
	{ svg: "/icons/Material UI.svg" },
	{ svg: "/icons/Bootstrap.svg" },
	{ svg: "/icons/Pandas.svg" },
	{ svg: "/icons/jQuery.svg" }
	// { svg: "/icons/Markdown.svg" },
];

export const frameWorks = [
	{ svg: "/icons/Python.svg" },
	// { svg: "/icons/redux.svg" },
	// { svg: "/icons/C++.svg" },
	// { svg: "/icons/Java.svg" },
	{ svg: "/icons/Postman.svg" },
	// { svg: "/icons/FastAPI.svg" },
	// { svg: "/icons/DialogFlow.svg" },
	// { svg: "/icons/VS code.svg" },
	{ svg: "/icons/NumPy.svg" },
	{ svg: "/icons/scikit-learn.svg" },
	{ svg: "/icons/TensorFlow.svg" },
	{ svg: "/icons/Matplotlib.svg" },
	// { svg: "/icons/Canva.svg" },
	// { svg: "/icons/Adobe Photoshop.svg" },
];
