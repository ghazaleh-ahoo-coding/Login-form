import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation/loginSchema";

export default function LoginForm({ onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
    setSuccess("Login Successful!");
    reset();
  };

  const handleReset = () => {
    reset();
    setSuccess("");
    setShowPassword(false);
  };

  return (
    <div>
      <h1>Please login to your acccount</h1>

      <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        {success && <div className="success">{success}</div>}

        <div className="field">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            autoComplete="email"
          />
          {errors.email && <div className="error">{errors.email.message}</div>}
        </div>

        <div className="field">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="********"
            {...register("password")}
            autoComplete="current-password"
          />
          <div className="helpRow">
            <label className="row small" style={{ cursor: "pointer" }}>
              <input
                className="checkbox"
                type="checkbox"
                checked={showPassword}
                onChange={(e) => setShowPassword(e.target.checked)}
              />
              Show password
            </label>
            <span className="small">Min 6 characters</span>
          </div>
          {errors.password && <div className="error">{errors.password.message}</div>}
        </div>

        <div className="actions">
          <button className="primary" type="submit" disabled={!isValid || isSubmitting}>
            Login
          </button>
          <button className="ghost" type="button" onClick={handleReset}>
            Reset
          </button>
          <p className="small" style={{ margin: 0 }}>
            Don't have an account?{" "}
            <button
              className="ghost"
              type="button"
              onClick={onSwitchToRegister}
              disabled={!onSwitchToRegister}
            >
              Create one
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
