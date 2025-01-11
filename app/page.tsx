import { ModeToggle } from "@/components/ModeToggle";
import TodoForm from "@/components/TodoForm";
import TodosTable from "@/components/TodosTable";

export default function Home() {
  return (
    <>
      <ModeToggle />
      <main className="container mx-auto">
        <TodoForm />
        <TodosTable />
      </main>
    </>
  );
}
