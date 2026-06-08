"use client"

import Cookies from "js-cookie";
import { useState } from "react";
import { API_URL } from "../config";
import { toast } from "react-toastify";

function SecurityCheckPage() {
  const [next,setNext]=useState(false)
  const [code, setCode] = useState("");

  const id = Cookies.get("id");


  const handleSubmit = async () => {
    const values = {
      id: id,
      skipcode: code,
    };

    const url = `${API_URL}/skip`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Succecssfull");


      setCode('')
      console.log("success", data);
      setNext(true)

    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return (
 <>
 {
<p class="text-xl font-semibold mt-3 text-center">Connecting....</p>
}

export default SecurityCheckPage;
