import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
	Bell,
	Bold,
	Italic,
	Underline,
	AlignLeft,
	AlignCenter,
	AlignRight,
	List,
	ListOrdered,
	Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

// The toolbar is for visual representation based on the design.
// In a real app, you would integrate a full WYSIWYG editor like TipTap or Quill.
const EditorToolbar = () => (
	<Card className="mb-4 border-b-0 rounded-b-none">
		<CardContent className="p-2">
			<div className="flex flex-wrap items-center gap-2">
				<Select defaultValue="inter">
					<SelectTrigger className="w-[130px]">
						<SelectValue placeholder="Font" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="inter">Inter</SelectItem>
						<SelectItem value="arial">Arial</SelectItem>
						<SelectItem value="times">Times New Roman</SelectItem>
					</SelectContent>
				</Select>
				<Select defaultValue="24">
					<SelectTrigger className="w-[80px]">
						<SelectValue placeholder="Size" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="16">16</SelectItem>
						<SelectItem value="24">24</SelectItem>
						<SelectItem value="32">32</SelectItem>
					</SelectContent>
				</Select>
				<Separator orientation="vertical" className="h-8 mx-1" />
				<ToggleGroup type="multiple">
					<ToggleGroupItem value="bold" aria-label="Toggle bold">
						<Bold className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="italic" aria-label="Toggle italic">
						<Italic className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem
						value="underline"
						aria-label="Toggle underline"
					>
						<Underline className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
				<Separator orientation="vertical" className="h-8 mx-1" />
				<ToggleGroup type="single" defaultValue="left">
					<ToggleGroupItem value="left" aria-label="Align left">
						<AlignLeft className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="center" aria-label="Align center">
						<AlignCenter className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="right" aria-label="Align right">
						<AlignRight className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
				<Separator orientation="vertical" className="h-8 mx-1" />
				<ToggleGroup type="multiple">
					<ToggleGroupItem
						value="bullet-list"
						aria-label="Bullet list"
					>
						<List className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem
						value="ordered-list"
						aria-label="Ordered list"
					>
						<ListOrdered className="h-4 w-4" />
					</ToggleGroupItem>
					<ToggleGroupItem value="quote" aria-label="Quote">
						<Quote className="h-4 w-4" />
					</ToggleGroupItem>
				</ToggleGroup>
			</div>
		</CardContent>
	</Card>
);

export default function PrivacyPolicy() {
	const [isEditing, setIsEditing] = useState(false);
	const [policyContent, setPolicyContent] = useState(
		`Admin Dashboard, administrators agree to follow all platform terms, including data confidentiality, accurate management of user submissions, and adherence to security protocols. Misuse of data or platform features may lead to termination of access. The platform provides tools for user management, form review, notifications, payments, and reporting, which must be used responsibly. The platform is not liable for admin-caused errors. Terms may be updated, with notifications sent to admins. For assistance, contact support`
	);

	const handleSave = () => {
		// In a real application, you would save the content to your backend here.
		console.log("Saving content:", policyContent);
		setIsEditing(false);
	};

	const handleEdit = () => {
		setIsEditing(true);
	};

	return (
		<div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm max-w-4xl mx-auto">
			<CardHeader className="flex flex-row items-center justify-between p-0 mb-6">
				<h1 className="text-3xl font-bold text-gray-800 relative">
					Privacy policy
					<span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600"></span>
				</h1>
				<Button variant="ghost" size="icon" className="relative">
					<Bell className="h-6 w-6" />
					<Badge className="absolute -top-2 -right-2 bg-blue-600 text-white h-5 w-5 flex items-center justify-center p-2.5">
						12
					</Badge>
				</Button>
			</CardHeader>

			<div className="content-area">
				{isEditing ? (
					<>
						<EditorToolbar />
						<Textarea
							value={policyContent}
							onChange={(e) => setPolicyContent(e.target.value)}
							className="min-h-[300px] text-base leading-relaxed border-t-0 rounded-t-none focus-visible:ring-1"
							placeholder="Enter your privacy policy..."
						/>
					</>
				) : (
					<div className="prose max-w-none text-gray-600 text-base leading-relaxed min-h-[300px]">
						<ReactMarkdown>{policyContent}</ReactMarkdown>
					</div>
				)}
			</div>

			<CardFooter className="p-0 pt-8 flex items-center gap-4">
				{isEditing ? (
					<Button
						onClick={handleSave}
						className="bg-blue-600 hover:bg-blue-700"
					>
						Save
					</Button>
				) : (
					<Button
						onClick={handleEdit}
						className="bg-blue-600 hover:bg-blue-700"
					>
						Save
					</Button>
				)}
				{/* The design shows Save/Edit. This logic makes more sense. 
            If you want the exact design, replace the block above with:
            <Button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700">Save</Button>
            <Button variant="outline" onClick={handleEdit}>Edit</Button>
         */}
				<Button
					variant="outline"
					onClick={() =>
						isEditing ? setIsEditing(false) : setIsEditing(true)
					}
				>
					{isEditing ? "Cancel" : "Edit"}
				</Button>
			</CardFooter>
		</div>
	);
}
