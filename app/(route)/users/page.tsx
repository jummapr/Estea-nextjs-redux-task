"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUser, selectUser } from "@/redux/features/userSlice";
import { Trash2 } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  const onDelete = (id: string) => {
      dispatch(deleteUser(id))
  }
  return (
    <div className="w-full flex  items-center justify-center">
      <Table className="w-[80rem] ml-12">
        <TableCaption>A list of All users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">firstName</TableHead>
            <TableHead>lastName</TableHead>
            <TableHead>email</TableHead>
            <TableHead>phone</TableHead>
            <TableHead>address</TableHead>
            <TableHead>country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.map((item: any) => (
            <TableRow>
              <>
                <TableCell className="font-medium">{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.country}</TableCell>
                <TableCell>
                  <Button variant={"destructive"} size={"icon"} onClick={() => onDelete(item.id)}>
                      <Trash2 />
                  </Button>
                </TableCell>
                <TableCell>
                  <Link href={`/users/edit/${item.id}`}>
                  <Button variant={"secondary"} size={"default"} >
                      Update
                  </Button></Link>
                </TableCell>
              </>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
