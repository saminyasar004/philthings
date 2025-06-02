import Layout from "@/components/common/Layout";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export const routes = [
	{
		path: "/",
		element: <Home />,
		layout: Layout,
	},
	// Add more custom routes here
	{
		path: "*",
		element: <NotFound />,
		layout: Layout,
	},
];
