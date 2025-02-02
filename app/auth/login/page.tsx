import { Metadata } from "next";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "CashTrackr - Iniciar Sesión",
  description:
    "Inicia sesión en CashTrackr para ver tus presupuestos y tus gastos",
};

export default function LoginPage() {
  return (
    <>
      <h1 className="font-black text-5xl text-purple-950">Inicia Sesión</h1>
      <p className="text-3xl font-bold">
        Y controla tus <span className="text-amber-500">finanzas</span>
      </p>

      <LoginForm />

      <nav className="my-4 flex flex-col space-y-4">
        <Link
          className="
            hover:text-purple-950 
            text-gray-500 
            transition-colors 
            duration-300 
            font-semibold
            text-center
          "
          href="/auth/register"
        >
          No tienes una cuenta? Crear Cuenta
        </Link>

        <Link
          className="
            hover:text-purple-950 
            text-gray-500 
            transition-colors 
            duration-300 
            font-semibold
            text-center
          "
          href="/auth/forgot-password"
        >
          Has olvidado tú contraseña? Recuperar Contraseña
        </Link>
      </nav>
    </>
  );
}
