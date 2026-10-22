import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { registerSchema,type RegisterForm } from "../../validator/user.ts";


function Register() {

  // Navigate
  const navigate = useNavigate();


  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });


  // Register Submit
  const onSubmit: SubmitHandler<RegisterForm> = (data) => { 

    // User Data
    const user = {
      username: data.username,
      email: data.email,
      password: data.password,
    };


    // Save User to LocalStorage
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );


    // Success Toast
    toast.success("Register Successful");


    // Go to Login Page
    navigate("/login");
  };


  return (
    <div className="w-full max-w-md rounded-2xl bg-white/30
    backdrop-blur-md p-8 shadow-xl">

      {/* Title */}
      <h1 className="mb-6 text-center text-3xl font-bold">
        Student Register
      </h1>


      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Username */}
        <div>
          <label className="mb-2 block">
            Username
          </label>

          <input
            type="text"
            {...register("username")}
            placeholder="Enter your username"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          {errors.username && (
            <p className="mt-1 text-sm text-red-500">
              {errors.username.message}
            </p>
          )}
        </div>


        {/* Email */}
        <div>
          <label className="mb-2 block">
            Email
          </label>

          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>


        {/* Password */}
        <div>
          <label className="mb-2 block">
            Password
          </label>

          <input
            type="password"
            {...register("password")}
            placeholder="Enter your password"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>


        {/* Confirm Password */}
        <div>
          <label className="mb-2 block">
            Confirm Password
          </label>

          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm your password"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>


        {/* Register Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>

      </form>


      {/* Login */}
      <p className="mt-6 text-center text-sm">
        Already have an account?{" "}

        <button
          type="button"
          onClick={() => navigate("/login")}
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </button>
      </p>

    </div>
  );
}

export default Register;