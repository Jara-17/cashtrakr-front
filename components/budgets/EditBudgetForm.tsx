/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";
import { Budget } from "@/src/schemas";
import BudgetForm from "./BudgetForm";
import { editBudget } from "@/actions/edit-budget.action";
import ErrorMessage from "../ui/ErrorMessage";
import { useRouter } from "next/navigation";

export default function EditBudgetForm({ budget }: { budget: Budget }) {
  const router = useRouter();
  const editBudgetWithId = editBudget.bind(null, budget.id);
  const [state, dispatch] = useActionState(editBudgetWithId, {
    errors: [],
    success: "",
  });

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      router.push("/admin");
    }
  }, [state]);

  return (
    <>
      <form className=" space-y-3" noValidate action={dispatch}>
        {state.errors.length > 0 &&
          state.errors.map((error) => (
            <ErrorMessage key={error}>{error}</ErrorMessage>
          ))}

        <BudgetForm budget={budget} />
        <input
          type="submit"
          className="bg-amber-500 w-full rounded-lg p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors"
          value="Crear Presupuesto"
        />
      </form>
    </>
  );
}
