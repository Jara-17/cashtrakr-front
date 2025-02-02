import { Metadata } from "next";
import Link from "next/link";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "CashTrackr - Olvidé mí Password",
  description:
    "Olvidaste tú password? No te preocupes, tenemos la solución para recuperar tu password",
};

export default function ForgotPasswordPage() {
  return (
    <>
      <h1 className="font-black text-5xl text-purple-950">
        ¿Olvidaste tú Contraseña?
      </h1>
      <p className="text-3xl font-bold">
        Aquí puedes <span className="text-amber-500">reestablecerla</span>
      </p>

      <ForgotPasswordForm />

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
          href="/auth/login"
        >
          Ya tienes cuenta? Iniciar Sesión
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
          href="/auth/register"
        >
          No tienes una cuenta? Crear Cuenta
        </Link>
      </nav>
    </>
  );
}
