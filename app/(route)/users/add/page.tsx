"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addUser } from "@/redux/features/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";


const AddUser= () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState([]);

  const countryData = [
    {
      name: "India",
      code: "IN",
    },
    {
      name: "Finland",
      code: "FL",
    },
    {
      name: "Australia",
      code: "AU",
    },
    {
      name: "Turkey",
      code: "TR",
    },
  ];

  const dispatch = useDispatch();
  const navigation = useRouter();

  const onSubmit = () => {
    if(!firstName || !lastName || !email || !phone || !address || !country) return;
    dispatch(
      addUser({
        id: nanoid(),
        firstName,
        lastName,
        email,
        phone,
        address,
        country,
      })
    );
    navigation.push("/users");
  };

  return (
    <div className="w-full h-full mt-20 flex items-center justify-center">
      <Card className="w-[60rem] flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Create User</CardTitle>
        </CardHeader>
        <CardContent className="w-[40rem]">
        <div className="flex flex-col gap-y-9">
            <Input
              type="text"
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text"
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="text"
              placeholder="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Select onValueChange={(e: any) => setCountry(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Country</SelectLabel>
                  {countryData.map((item) => (
                    <SelectItem key={item.code} value={item.code}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <Button onClick={onSubmit}>Submit</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddUser;
