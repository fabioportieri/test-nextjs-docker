"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const handleApiCall = () => {
    // Define your API endpoint
    const apiUrl = "/api/testpost";

    // Define your POST data
    const postData = {
      key1: "value1",
      key2: "value2",
    };

    // Perform the POST request using fetch
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers if needed
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response data
        console.log("API Response:", data);
      })
      .catch((error) => {
        // Handle any errors during the API call
        console.error("API Error:", error);
      });
  };

  return (
    <>
      <Link href={`/api/chat`}>
        <Button>Test LOG</Button>
      </Link>
      <br />
      <Button onClick={handleApiCall}>Test API POST</Button>
    </>
  );
}
