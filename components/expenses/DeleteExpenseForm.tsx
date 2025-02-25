/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useSearchParams } from "next/navigation";
import { DialogTitle } from "@headlessui/react";
import { startTransition, useActionState, useEffect } from "react";
import deleteExpense from "@/actions/delete-expense.action";
import ErrorMessage from "../ui/ErrorMessage";
import { toast } from "react-toastify";

type DeleteExpenseForm = {
  closeModal: () => void;
};

export default function DeleteExpenseForm({ closeModal }: DeleteExpenseForm) {
  const { budgetId } = useParams();
  const searchParams = useSearchParams();
  const expenseId = searchParams.get("deleteExpenseId")!;

  const deleteExpenseWithBudgetAndExpenseId = deleteExpense.bind(null, {
    budgetId: +budgetId!,
    expenseId: +expenseId,
  });
  const [state, dispatch] = useActionState(
    deleteExpenseWithBudgetAndExpenseId,
    {
      errors: [],
      success: "",
    }
  );

  useEffect(() => {
    if (state.success) {
      toast.success(state.success);
      closeModal();
    }
  }, [state]);

  useEffect(() => {
    if (!Number.isInteger(+budgetId!) || !Number.isInteger(+expenseId)) {
      closeModal();
    }
  }, []);

  return (
    <>
      <DialogTitle as="h3" className="font-black text-4xl text-purple-950 my-5">
        Eliminar Gasto
      </DialogTitle>

      {state.errors.map((error) => (
        <ErrorMessage key={error}>{error}</ErrorMessage>
      ))}

      <p className="text-xl font-bold">
        Confirma para eliminar, {""}
        <span className="text-amber-500">el gasto</span>
      </p>

      <p className="text-gray-600 text-sm">
        (Un gasto eliminado no se puede recuperar)
      </p>

      <div className="grid grid-cols-2 gap-5 mt-10">
        <button
          className="bg-amber-500 w-full p-3 text-white uppercase font-bold hover:bg-amber-600 cursor-pointer transition-colors rounded-lg"
          onClick={closeModal}
        >
          Cancelar
        </button>

        <button
          type="button"
          className="bg-red-500 w-full p-3 text-white uppercase font-bold hover:bg-red-600 cursor-pointer transition-colors rounded-lg"
          onClick={() => startTransition(() => dispatch())}
        >
          Eliminar
        </button>
      </div>
    </>
  );
}
