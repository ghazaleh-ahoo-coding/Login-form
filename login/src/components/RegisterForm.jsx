import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../validation/registerSchema";

export default function RegisterForm() {
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setSuccess("Registration Successful!");
    reset();
  };

  return (
    <div>
      <h1>Create your account</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {success && <div className="success">{success}</div>}

        <div className="field">
          <label htmlFor="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            placeholder="Jane Doe"
            {...register("fullName")}
            autoComplete="name"
          />
          {errors.fullName && <div className="error">{errors.fullName.message}</div>}
        </div>

        <div className="field">
          <label htmlFor="register-email">Email</label>
          <input
            id="register-email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            autoComplete="email"
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div className="field">
          <label htmlFor="register-password">Password</label>
          <input
            id="register-password"
            type="password"
            placeholder="Minimum 8 characters"
            {...register("password")}
            autoComplete="new-password"
          />
          {errors.password && <div className="error">{errors.password.message}</div>}
        </div>

        <div className="field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            placeholder="Re-enter your password"
            {...register("confirmPassword")}
            autoComplete="new-password"
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword.message}</div>
          )}
        </div>

        <div className="field">
          <label className="row">
            <input type="checkbox" className="checkbox" {...register("terms")} />
            <span>Terms &amp; Conditions</span>
          </label>
          {errors.terms && <div className="error">{errors.terms.message}</div>}
        </div>

        <div className="actions">
          <button className="primary" type="submit" disabled={!isValid || isSubmitting}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
