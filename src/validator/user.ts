import { z} from "zod";

export const registerSchema = z.object({
    username: z.string().min(5,"Please enter 5 character"),
    email: z.string().email("Please Enter Email"),
    password: z.string().min(6,"Please enter at least 6 character"),
    confirmPassword: z.string().min(6,"Confirm enter password")
}).refine((data)=> data.password === data.confirmPassword, {
        message: "Not match Password, try again",
        path: ["confirmPassword"]
    });


export const loginSchema = z.object({
    email: z.string().email("Plese Enter Email"),
    password: z.string().min(6,"Please enter at least 6 character"),
});

export const forgotPasswordSchema = z.object({
    email: z.string().email("Please Enter Email"),
});

export const resetPasswordSchema = z.object({
    password: z.string().min(6,"Please enter at least 6 character"),
    confirmPassword: z.string().min(6,"Confirm enter password"),
}).refine((data)=> data.password === data.confirmPassword , {
    message: "Not match Password, try again",
    path: ["confirmPassword"]
});

//Types//

export type RegisterForm = z.infer<typeof registerSchema>;

export type LoginForm = z.infer<typeof loginSchema>;

export type ForgotPasswordForm = z.infer<typeof forgotPasswordSchema>;

export type ResetPasswordForm = z.infer<typeof resetPasswordSchema>;

