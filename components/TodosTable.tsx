import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import TodosActions from "./TodosActions";
import { Badge } from "./ui/badge";
import { auth } from "@clerk/nextjs/server";

export default async function TodosTable({ todos }: { todos: ITodo[] }) {
  const { userId } = await auth();
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Completed</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todos.map((todo) => (
          <TableRow key={todo.id}>
            <TableCell className="font-medium">{todo.id}</TableCell>
            <TableCell>{todo.title}</TableCell>
            <TableCell className="text-left">
              {todo.completed ? (
                <Badge>Completed</Badge>
              ) : (
                <Badge variant={"secondary"}>Incompleted</Badge>
              )}
            </TableCell>
            <TableCell className="space-x-2 flex justify-end">
              <TodosActions todo={todo} userId={userId as string} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
