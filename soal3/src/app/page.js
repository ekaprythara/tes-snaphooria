"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwdRef = useRef();

  const [errors, setErrors] = useState({});

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!nameRef.current.value) newErrors.name = "Nama tidak boleh kosong";
    if (!emailRef.current.value) newErrors.email = "Email tidak boleh kosong";
    if (!passwdRef.current.value)
      newErrors.passwd = "Password tidak boleh kosong";

    if (emailRef.current.value && !validateEmail(emailRef.current.value)) {
      newErrors.email = "Format email tidak valid";
    }

    setErrors(newErrors);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white text-neutral-800 rounded-xl shadow-lg p-10 max-w-xl w-full">
        <h2 className="text-center text-2xl">Register</h2>
        <form onSubmit={handleSubmit} className="mt-5 max-w-xl">
          <label className="form-control">
            <div className="label">
              <span className="label-text">Nama</span>
            </div>
            <input
              type="text"
              name="name"
              className="input input-bordered bg-slate-100"
              ref={nameRef}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 ms-2">
                {errors.name}
              </span>
            )}
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              name="email"
              className="input input-bordered bg-slate-100"
              ref={emailRef}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 ms-2">
                {errors.email}
              </span>
            )}
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              name="passwd"
              className="input input-bordered bg-slate-100"
              ref={passwdRef}
            />
            {errors.passwd && (
              <span className="text-red-500 text-sm mt-1 ms-2">
                {errors.passwd}
              </span>
            )}
          </label>

          <div className="mt-3">
            <button className="btn btn-primary btn-md w-full">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
