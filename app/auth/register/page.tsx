import { Metadata } from "next";
import Link from "next/link";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "CashTrackr - Crear Cuenta",
  description:
    "Crea una cuenta gratuita en CashTrackr y controla tus finanzas de manera sencilla y segura.",
};

export default function RegisterPage() {
  return (
    <>
      <h1 className="font-black text-5xl text-purple-950">Crea una Cuenta</h1>
      <p className="text-3xl font-bold">
        Y controla tús <span className="text-amber-500">finanzas</span>
      </p>

      <RegisterForm />

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
          href="/auth/forgot-password"
        >
          Has olvidado tú contraseña? Recuperar Contraseña
        </Link>
      </nav>
    </>
  );
}
