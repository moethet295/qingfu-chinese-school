import { toast } from "sonner";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  resetPasswordSchema,
  type ResetPasswordForm,
} from "../../validator/user";


function ResetPassword() {

  const navigate = useNavigate();

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordForm>({
    resolver: zodResolver(resetPasswordSchema),
  });


  // Reset Password Submit
  const onSubmit: SubmitHandler<ResetPasswordForm> = (data) => {

    // localStorage ထဲက user ကိုယူ
    const savedUser = localStorage.getItem("user");


    // Account မရှိရင် Register ကိုပို့
    if (!savedUser) {
      toast.error("You don't have an account");

      navigate("/");

      return;
    }


    // JSON String → Object
    const user = JSON.parse(savedUser);


    // Password အသစ်နဲ့ user ကို update
    const updatedUser = {
      ...user,
      password: data.password,
    };


    // Updated user ကို localStorage ပြန်သိမ်း
    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );


    toast.success("Password reset successfully");


    // Password အသစ်နဲ့ Login ပြန်ဝင်ဖို့
    navigate("/login");
  };


  return (
    <div className="w-full max-w-md rounded-2xl bg-white/30
    backdrop-blur-md p-8 shadow-2xl">

      {/* Title */}
      <h1 className="mb-6 text-center text-2xl font-bold">
        Reset Password
      </h1>


      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >

        {/* New Password */}
        <div>

          <label className="mb-2 block">
            New Password
          </label>

          <input
            type="password"
            {...register("password")}
            placeholder="Enter new password"
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
            placeholder="Confirm new password"
            className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
          />

          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}

        </div>


        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-blue-500 p-3 font-semibold text-white hover:bg-blue-600 disabled:opacity-50"
        >
          {isSubmitting
            ? "Resetting Password..."
            : "Reset Password"}
        </button>

      </form>

    </div>
  );
}

export default ResetPassword;