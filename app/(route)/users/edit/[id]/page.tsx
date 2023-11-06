"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {  selectUser, updateUser } from "@/redux/features/userSlice";
import { redirect, useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const UpdateUser = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const navigation = useRouter();


  const [firstName, setFirstName] = useState(user[0]?.firstName);
  const [lastName, setLastName] = useState(user[0]?.lastName);
  const [email, setEmail] = useState(user[0]?.email);
  const [phone, setPhone] = useState(user[0]?.phone);
  const [address, setAddress] = useState(user[0]?.address);
  const [country, setCountry] = useState(user[0]?.country);
  const params = useParams();

  if(!user) {
    return redirect("/add")
  }


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


  const onSubmit = () => {
    dispatch(
      updateUser({ id:params.id, firstName, lastName, email, phone, address,country })
    );
    navigation.push("/users");
  };

  return (
   <div className="w-full h-full mt-20 flex items-center justify-center">
      <Card className="w-[60rem] flex flex-col items-center justify-center">
        <CardHeader>
          <CardTitle>Update User</CardTitle>
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
            <Select value={country} onValueChange={(e: any) => setCountry(e)}>
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

export default UpdateUser;
