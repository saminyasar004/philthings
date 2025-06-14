import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { affiliateLinksData } from "@/lib/mock-data";
import { Search, Trash2 } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface AffiliateLink {
	productName: string;
	category: string;
	productLink: string;
	productPrice: number;
}

export default function AffiliateLinks() {
	const [selectedAffiliate, setSelectedAffiliate] =
		useState<AffiliateLink | null>(null);

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
								Product Name
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Category
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Product Link
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Product Price
							</TableHead>
							<TableHead className="font-semibold text-center text-white">
								Action
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{affiliateLinksData.map((affiliate, index) => (
							<Dialog key={index}>
								<DialogTrigger asChild>
									<TableRow
										className="bg-[#fefefe] text-gray-500 hover:bg-[#b0c0d6] hover:text-white transition-all duration-100 cursor-pointer"
										onClick={() =>
											setSelectedAffiliate(affiliate)
										}
									>
										<TableCell className="font-medium text-center font-montserrat">
											{affiliate.productName}
										</TableCell>
										<TableCell className="font-medium text-center font-montserrat">
											{affiliate.category}
										</TableCell>
										<TableCell className="font-medium text-center text-warning font-montserrat">
											{affiliate.productLink}
										</TableCell>
										<TableCell className="font-medium text-center font-montserrat">
											$
											{affiliate.productPrice.toLocaleString()}
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
									<DialogHeader>
										<DialogTitle className="text-primary text-3xl">
											Affiliate Link Details
										</DialogTitle>
									</DialogHeader>
									{selectedAffiliate && (
										<div className="py-6 space-y-5">
											<div className="w-full flex gap-4">
												<div className="w-full flex gap-1 flex-col">
													<h4 className="text-gray-400">
														Product Name:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														{
															selectedAffiliate.productName
														}
													</h4>
												</div>

												<div className="w-full flex gap-1 flex-col">
													<h4 className="text-gray-400">
														Total Clicks:
													</h4>
													<h4 className="text-primary font-montserrat font-semibold text-base">
														128
													</h4>
												</div>
											</div>

											<div className="w-full flex gap-1 flex-col">
												<h4 className="text-gray-400">
													Platform:
												</h4>
												<h4 className="text-primary font-montserrat font-semibold text-base">
													Amazon
												</h4>
											</div>

											<div className="w-full flex gap-1 flex-col">
												<h4 className="text-gray-400">
													Product URL:
												</h4>
												<h4 className="text-warning font-montserrat font-normal text-base">
													{
														selectedAffiliate.productLink
													}
												</h4>
											</div>

											<div className="w-full flex gap-1 flex-col">
												<h4 className="text-gray-400">
													Affiliate URL:
												</h4>
												<h4 className="text-warning font-montserrat font-normal text-base">
													{
														selectedAffiliate.productLink
													}
												</h4>
											</div>

											<div className="w-full">
												<Button
													size="sm"
													className="w-[100px]"
												>
													Edit
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
