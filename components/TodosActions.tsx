"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Spinner from "./ui/Spinner";
import { Trash } from "lucide-react";
import { deleteTodosAction } from "@/actions/todos.actions";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodosActions = ({ todo, userId }: { todo: ITodo; userId: string }) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="space-x-3 flex">
      <EditTodoForm todo={todo} userId={userId as string} />
      <Button
        variant={"destructive"}
        size={"icon"}
        onClick={async () => {
          setLoading(true);
          await deleteTodosAction({ id: todo.id as string });
          setLoading(false);
        }}
      >
        {loading ? <Spinner variant={"secondary"} /> : <Trash />}
      </Button>
    </div>
  );
};

export default TodosActions;
