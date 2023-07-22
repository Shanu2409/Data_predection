"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const {push} = useRouter();
  const [name, setName] = useState("");

  const handleSubmit = (e : any) => {
    e.preventDefault();

    if (!name) {
      alert("Please enter your name");
      return;
    }
    
    push(`/predict/${name}`)
    
    setName("");
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-8 bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Enter your name:</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <div className="relative w-full mb-4">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter your name here....."
              className="px-4 py-2 w-full text-white rounded-lg bg-gray-700 focus:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-300"
              onChange={(e) => setName(e.target.value)}
            />
            
          </div>
          <button
            type="submit"
            className="px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
          >
            Predict Data
          </button>
          <button
            type="reset"
            className="px-4 py-2 w-full mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none"
          >
            Reset Data
          </button>
        </form>
      </div>
    </main>
  );
}
