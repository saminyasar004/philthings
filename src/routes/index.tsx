import AuthLayout from "@/components/common/AuthLayout";
import Layout from "@/components/common/Layout";
import AdminLogin from "@/pages/auth/admin/Login";
import ForgotPassword from "@/pages/auth/user/ForgotPassword";
import Home from "@/pages/Home";
import Login from "@/pages/auth/user/Login";
import NotFound from "@/pages/NotFound";
import Signup from "@/pages/auth/user/Signup";
import VerifyOTP from "@/pages/auth/user/VerifyOTP";
import CreateNewPassword from "@/pages/auth/user/CreateNewPassword";
import PasswordChanged from "@/pages/auth/user/PasswordChanged";
import RecoverPassword from "@/pages/auth/admin/RecoverPassword";
import SetNewPassword from "@/pages/auth/admin/SetNewPassword";
import Chat from "@/pages/chat";
import ChatLayout from "@/components/common/ChatLayout";
import NewChat from "@/pages/chat/new";

export const routes = [
	{
		path: "/",
		element: <Home />,
		layout: Layout,
	},
	// Add more custom routes here
	{
		path: "/admin-login",
		element: <AdminLogin />,
	},
	{
		path: "/recover-password",
		element: <RecoverPassword />,
	},
	{
		path: "/set-new-password",
		element: <SetNewPassword />,
	},
	{
		path: "/login",
		element: <Login />,
		layout: AuthLayout,
	},
	{
		path: "/signup",
		element: <Signup />,
		layout: AuthLayout,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword />,
		layout: AuthLayout,
	},
	{
		path: "/verify-otp",
		element: <VerifyOTP />,
		layout: AuthLayout,
	},
	{
		path: "/create-new-password",
		element: <CreateNewPassword />,
		layout: AuthLayout,
	},
	{
		path: "/password-changed",
		element: <PasswordChanged />,
		layout: AuthLayout,
	},
	{
		path: "/chat/:id",
		element: <Chat />,
		layout: ChatLayout,
	},
	{
		path: "/chat",
		element: <NewChat />,
		layout: ChatLayout,
	},
	{
		path: "/chat/new",
		element: <NewChat />,
		layout: ChatLayout,
	},
	{
		path: "*",
		element: <NotFound />,
		layout: Layout,
	},
];
