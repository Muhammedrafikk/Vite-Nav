import React, { useState } from "react";


const Form = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log("Email:", email, "Password:", password);
   };
  return (
   <div className="flex justify-center items-cente m-3 mt-10 ">
   <form onSubmit={handleSubmit} className="bg-amber-500 p-6 rounded-lg shadow-md w-96">
     <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
     <div className="mb-4">
       <label className="block text-gray-700">Email</label>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 max-sm:py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
     </div>
     <div className="mb-4">
       <label className="block text-gray-700">Password</label>
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 max-sm:py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" required/>
     </div>
     <button type="submit"className="w-full bg-blue-500 text-white py-2  max-sm:py-1 rounded-lg hover:bg-blue-600 transition">Submit</button>
   </form>
 </div>
  )
}

export default Form