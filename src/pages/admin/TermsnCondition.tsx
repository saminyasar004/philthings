import MarkdownEditor from "@/components/markdown-editor";

const TermsnCondition = () => {
	const contentMD =
		"Admin Dashboard, administrators agree to follow all platform terms, including data confidentiality, accurate management of user submissions, and adherence to security protocols. Misuse of data or platform features may lead to termination of access. The platform provides tools for user management, form review, notifications, payments, and reporting, which must be used responsibly. The platform is not liable for admin-caused errors. Terms may be updated, with notifications sent to admins. For assistance, contact support";

	return (
		<section className="w-full py-1 space-y-4">
			<MarkdownEditor contentMD={contentMD} />
		</section>
	);
};

export default TermsnCondition;
