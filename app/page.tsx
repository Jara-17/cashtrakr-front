"use client";

import { motion } from "framer-motion";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-purple-950 py-5"
      >
        <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-80 lg:w-[500px]"
          >
            <Logo />
          </motion.div>
          <nav className="flex flex-col justify-center items-center lg:flex-row lg:justify-end gap-5 w-full">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/login"
                className="font-bold text-white hover:text-amber-500 uppercase text-sm text-center"
              >
                Iniciar Sesión
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/auth/register"
                className="font-bold text-white hover:text-amber-500 uppercase text-sm text-center"
              >
                Registrarme
              </Link>
            </motion.div>
          </nav>
        </div>
      </motion.header>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto p-5 space-y-5 mt-20"
      >
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-black text-4xl lg:text-6xl text-purple-950"
        >
          Administrador de Gastos
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-3xl font-bold"
        >
          controla tus <span className="text-amber-500">finanzas</span>
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg"
        >
          Domina tus finanzas con nuestro Administrador de Gastos. Simplifica la
          gestión de tus ingresos y egresos en un solo lugar, de manera
          intuitiva y eficiente. Toma el control total de tus finanzas
          personales o empresariales con nuestra plataforma fácil de usar.
        </motion.p>

        <motion.h2
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="font-black text-4xl text-purple-950"
        >
          Ventajas de CashTrackr
        </motion.h2>

        <motion.ol
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="grid grid-cols-1 gap-5 items-start"
        >
          {[
            {
              title: "Organización sin Esfuerzo:",
              description:
                "Clasifica y visualiza tus gastos de forma clara y ordenada, sin complicaciones con nuestro panel amigable y fácil de usar.",
            },
            {
              title: "Presupuestación Inteligente:",
              description:
                "Establece objetivos financieros realistas y sigue tu progreso con nuestras herramientas de presupuestación inteligente.",
            },
            {
              title: "Acceso en cualquier lugar:",
              description:
                "Nuestra plataforma está disponible para que puedas gestionar tus finanzas desde donde te encuentres.",
            },
            {
              title: "Seguridad Garantizada:",
              description:
                "Protegemos tus datos con los más altos estándares de seguridad, para que puedas utilizar nuestra plataforma con total tranquilidad.",
            },
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="p-5 shadow-lg text-lg"
            >
              <span className="text-purple-950 font-black">{item.title}</span>{" "}
              {item.description}
            </motion.li>
          ))}
        </motion.ol>
      </motion.main>

      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-10 pb-20 max-w-3xl mx-auto"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/auth/register"
            className="text-gray-500 text-sm uppercase text-center"
          >
            ¿No tienes cuenta? Crea una
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/auth/login"
            className="text-gray-500 text-sm uppercase text-center"
          >
            ¿Ya tienes cuenta? Iniciar Sesión
          </Link>
        </motion.div>
      </motion.nav>
    </>
  );
}
