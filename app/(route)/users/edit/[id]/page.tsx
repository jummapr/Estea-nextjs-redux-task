"use client";

import { Button } from "@/components/ui/button";
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
import { addUser, selectUser, updateUser } from "@/redux/features/userSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useParams, useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const user = useSelector(selectUser)
  const [firstName, setFirstName] = useState(user[0]?.firstName);
  const [lastName, setLastName] = useState(user[0]?.lastName);
  const [email, setEmail] = useState(user[0]?.email);
  const [phone, setPhone] = useState(user[0]?.phone);
  const [address, setAddress] = useState(user[0]?.address);
  const [country, setCountry] = useState(user[0]?.country);
  const params = useParams();


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
    dispatch(
      updateUser({ id:params.id, firstName, lastName, email, phone, address,country })
    );
    navigation.push("/users");
  };

  return (
    <div className="mt-10">
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
      <Select value={country} onValueChange={(e:any) => setCountry(e)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            {countryData.map((item) => (
              <SelectItem key={item.code}  value={item.code}>
                {item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};

export default page;
