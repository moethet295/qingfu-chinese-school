import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginForm,
} from "../../validator/user";

function Login() {
  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  // Login Submit Handler
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    // Register တုန်းက သိမ်းထားတဲ့ user ကိုယူ
    const savedUser = localStorage.getItem("user");

    // Account မရှိသေးရင်
    if (!savedUser) {
      toast.error("Account not found. Please register first.");
      navigate("/register");
      return;
    }

    // JSON String → JavaScript Object
    const user = JSON.parse(savedUser);

    // Email + Password စစ်
    if (
      data.email === user.email &&
      data.password === user.password
    ) {
      // Login ဝင်ထားကြောင်း localStorage မှာသိမ်း
      localStorage.setItem("isLoggedIn", "true");

      // Student role သိမ်း
      localStorage.setItem("role", "student");

      toast.success("Login Successful");

      // Home Page သွား
      navigate("/home");

      return;
    }

    // Email / Password မှားရင်
    toast.error("Email or password is incorrect");
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/30
    backdrop-blur-md p-8 shadow-2xl">

      {/* Title */}
      <h1 className="mb-6 text-center text-2xl font-bold">
        Student Login
      </h1>

      {/* Login Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* Email */}
        <div>
          <label className="mb-2 block">
            Email
          </label>

          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email"
            className="w-full rounded-lg border p-3 outline-none"
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
            className="w-full rounded-lg border p-3 outline-none"
          />

          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Login Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-500 p-3 font-semibold text-white"
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>

      </form>

      {/* Register */}
      <p className="mt-6 text-center text-sm">
        Don't have an account?{" "}

        <button
          type="button"
          onClick={() => navigate("/")}
          className="font-semibold text-blue-600 hover:underline"
        >
          Register
        </button>
      </p>

    </div>
  );
}

export default Login;