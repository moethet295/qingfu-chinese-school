import { useNavigate } from "react-router-dom";
import {
  forgotPasswordSchema,
  type ForgotPasswordForm,
} from "../../validator/user";

import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function ForgetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordForm>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<ForgotPasswordForm> = (data) => {
    // Register တုန်းက သိမ်းထားတဲ့ user ကိုယူ
    const savedUser = localStorage.getItem("user");

    // User မရှိရင်
    if (!savedUser) {
      toast.error("Account not found. Please register first.");
      navigate("/");
      return;
    }

    // JSON string ကို object ပြန်ပြောင်း
    const user = JSON.parse(savedUser);

    // Email မတူရင်
    if (data.email !== user.email) {
      toast.error("Email does not match.");
      return;
    }

    // Email တူရင်
    toast.success("Email verified successfully.");

    navigate("/reset-password");
  };

  return (
    <div className="w-full max-w-md rounded-2xl bg-white/30
    backdrop-blur-md p-8 shadow-2xl">

      <h1 className="mb-6 text-center text-2xl font-bold">
        Forgot Password
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-500 p-3 font-semibold text-white"
        >
          {isSubmitting ? "Checking..." : "Continue"}
        </button>
      </form>

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

export default ForgetPassword;