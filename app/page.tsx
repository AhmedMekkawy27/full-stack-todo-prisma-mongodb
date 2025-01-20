import { getTodosAction } from "@/actions/todos.actions";
import AddTodoForm from "@/components/AddTodoForm";
import Navbar from "@/components/Navbar";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getTodosAction();
  return (
    <>
      <Navbar />
      <main className="container mx-auto">
        <AddTodoForm userId={userId as string} />
        <TodosTable todos={todos} />
      </main>
    </>
  );
}
