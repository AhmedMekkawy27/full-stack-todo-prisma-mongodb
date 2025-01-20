import { getUserTodosAction } from "@/actions/todos.actions";
import AddTodoForm from "@/components/AddTodoForm";
import Navbar from "@/components/Navbar";
import TodosTable from "@/components/TodosTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();
  const todos = await getUserTodosAction({ user_id: userId as string });
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
