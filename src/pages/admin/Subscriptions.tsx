import { AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { UserProps, users } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Search, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Subscriptions() {
	const [selectedUser, setSelectedUser] = useState<UserProps | null>(null);

	return (
		<div className="w-full flex flex-col gap-5 py-5">
			<div className="max-w-xs relative border border-gray-200 rounded-md">
				<Search
					className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
					size={20}
				/>
				<Input
					placeholder="Search"
					className="pl-10 bg-transparent border-none"
				/>
			</div>

			<div className="w-full border border-gray-200 rounded-lg">
				<Table className="border-collapse px-0 w-full">
					<TableHeader>
						<TableRow className="bg-primary text-white hover:bg-primary">
							<TableHead className="font-semibold text-center text-white">
								User Name
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Email
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Last Active
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Plan
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Action
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{users.map((user, index) => (
							<Dialog key={index}>
								<DialogTrigger asChild>
									<TableRow
										className="bg-[#fefefe] text-gray-500 hover:bg-[#b0c0d6] hover:text-white transition-all duration-100 cursor-pointer"
										onClick={() => setSelectedUser(user)}
									>
										<TableCell className="font-medium text-center font-montserrat">
											{user.name}
										</TableCell>
										<TableCell className="font-medium text-center font-montserrat">
											{user.email}
										</TableCell>
										<TableCell className="font-medium text-center font-montserrat">
											{user.lastActive}
										</TableCell>
										<TableCell className="font-medium text-center font-montserrat">
											{user.subscriptionPlan}
										</TableCell>
										<TableCell className="flex items-center justify-center text-gray-400">
											<Trash2
												className="text-red-500 cursor-pointer"
												size={18}
											/>
										</TableCell>
									</TableRow>
								</DialogTrigger>
								<DialogContent className="p-14">
									<AlertDialogHeader>
										<DialogTitle className="text-primary text-3xl">
											Subscription Details
										</DialogTitle>
									</AlertDialogHeader>
									{selectedUser && (
										<div className="py-6 w-full flex flex-col gap-4 items-center justify-center">
											<div className="w-full flex gap-1 flex-col items-center">
												<img
													src={selectedUser.avatarUrl}
													alt="Avatar"
													className="w-16 h-16 rounded-full"
												/>
												<h4 className="text-primary font-semibold text-2xl pt-3">
													{selectedUser.name}
												</h4>
												<h5 className="font-montserrat text-sm text-gray-400">
													{selectedUser.email}
												</h5>
											</div>

											<div className="w-full grid grid-cols-2 gap-8 py-1">
												<div className="w-full flex items-start gap-1 flex-col">
													<h4 className="text-gray-400">
														Subscription Plan:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														{
															selectedUser.subscriptionPlan
														}
													</h4>
												</div>

												<div className="w-full flex items-start gap-1 flex-col">
													<h4 className="text-gray-400">
														Billing Information:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														{
															selectedUser.billingInformation
														}
													</h4>
												</div>
											</div>

											<div className="w-full grid grid-cols-2 gap-8 py-1">
												<div className="w-full flex items-start gap-1 flex-col">
													<h4 className="text-gray-400">
														Price:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														{selectedUser.price}
													</h4>
												</div>

												<div className="w-full flex items-start gap-1 flex-col">
													<h4 className="text-gray-400">
														Start Date:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														{selectedUser.startDate}
													</h4>
												</div>
											</div>

											<div className="w-full grid grid-cols-2 gap-8 py-1">
												<div className="w-full flex items-start gap-1 flex-col">
													<h4 className="text-gray-400">
														Status:
													</h4>
													<h4
														className={cn(
															"font-montserrat font-semibold text-base",
															selectedUser.status ===
																"Active"
																? "text-green-500"
																: "text-danger"
														)}
													>
														{selectedUser.status}
													</h4>
												</div>

												<div className="w-full flex items-start gap-1 flex-col">
													<h4 className="text-gray-400">
														Next Billing Date:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														{
															selectedUser.nextBillingDate
														}
													</h4>
												</div>
											</div>

											<div className="w-full flex items-center justify-center">
												<Button
													size="sm"
													variant="destructive"
												>
													Cancel Subscription
												</Button>
											</div>
										</div>
									)}
								</DialogContent>
							</Dialog>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
