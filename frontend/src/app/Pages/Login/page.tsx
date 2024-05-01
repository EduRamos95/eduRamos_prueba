// pages/login.tsx
"use client";
import React from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import {useState} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const router = useRouter()
  // const router = useNavigation();
  const [error, setError] = useState(null)
  
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    try {
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      console.log(res)
      console.log(await res.json());
      if (res.body != null) {
        // setError(res.error)
        console.log("error")
      } else {
        console.log("paso")
        // router.push('/dashboard')
        // router.refresh()
      }
    } catch (error){
    };
    
    console.log(error ?? "no msg" );
    }
  )

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} method="post" className="w-1/4">

        {error && (
          <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">{error}</p>
        )}

        <h1 className="text-slate-200 font-bold text-4xl mb-4">Login</h1>

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="user@email.com"
        />

        {errors.email && (
          <span className="text-red-500 text-xs">{typeof errors.email.message === 'string' && errors.email.message}</span>
        )}

        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
          placeholder="******"
        />

        {errors.password && (
          <span className="text-red-500 text-xs">
            {typeof errors.email?.message === 'string' && errors.email.message}
          </span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;