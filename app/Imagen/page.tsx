// @ts-nocheck
"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import "@/styles/ai.css"

const ImageGenerator =  () => {
  const [text, setText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    // create a div element
    const div = document.createElement("div");
    div.id = "imagecontainer";

    // append div into the body
    document.body.appendChild(div);

    const requestOptions = {
      method: 'POST',
      body: JSON.stringify({ 'text': `${text}` }), // Replace 'Your JSON payload here' with your actual JSON payload
      headers: {
          'Content-Type': 'application/json',
          },
      };

    await fetch('http://129.154.41.10:5000/generate', requestOptions)
      .then(response => response.json())
      .then(data => {
          const imageString = data.serializedImages; // Assuming the image string is returned in the 'image' property of the response JSON
          for (let imagePhoto in imageString) {
              const image = new Image();
              let imagen = imageString[imagePhoto]; 
              image.src = `data:image/jpeg;charset=utf-8;base64, ${imagen}`;
              document.getElementById("imagecontainer").appendChild(image);
          }
      })
    .catch(error => {
        console.error('Error:', error);
    });
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10">
      <h1 className="font-bold text-4xl">Imagen</h1>
      <div className="flex gap-5">
        <input type="text" name="text" placeholder="Enter the prompt" className={cn("w-[400px] h-[40px] p-2 rounded-md")} onChange={(e)=>{
          setText(e.target.value);
        }} />
        <button className="bg-black text-white font-bold px-5 rounded-md" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default ImageGenerator;