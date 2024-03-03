import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const postsData = [
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
  {
    title: "Hello World",
    createdAt: "24 Feb 2024",
    tags: "react, javascript",
  },
];

const PostslistPage = () => {
  return (
    <>
      <div className="text-3xl font-bold my-3">My Posts</div>
      <div className="my-12">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Tags</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {postsData.map((post, ind) => (
              <TableRow key={ind}>
                <TableCell>{ind + 1}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.tags}</TableCell>
                <TableCell>{post.createdAt}</TableCell>
                <TableCell className="text-right flex gap-2 justify-end">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination className="mt-12 justify-end">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
};

export default PostslistPage;
