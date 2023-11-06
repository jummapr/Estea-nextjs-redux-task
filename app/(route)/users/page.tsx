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
import { useDispatch, useSelector } from "react-redux";


const Users = ({}) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  const onDelete = (id: string) => {
      dispatch(deleteUser(id))
  }
  return (
    <div className="w-full flex items-center justify-center">
      <div className="  w-[80rem] mt-10">
      <Table className="">
        <TableCaption>List of All users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">FirstName</TableHead>
            <TableHead>LastName</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Country</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.map((item: any) => (
            <TableRow key={item.id}>
              <>
                <TableCell className="font-medium">{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.address}</TableCell>
                <TableCell>{item.country}</TableCell>
                
                <TableCell>
                  <Link href={`/users/edit/${item.id}`}>
                  <Button variant={"secondary"} size={"default"} >
                      Update
                  </Button>
                  </Link>
                </TableCell>
                <TableCell>
                  <Button variant={"destructive"} size={"icon"} onClick={() => onDelete(item.id)}>
                      <Trash2 />
                  </Button>
                </TableCell>
              </>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    </div>
  );
};

export default Users;
