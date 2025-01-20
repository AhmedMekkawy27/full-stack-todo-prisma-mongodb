export interface ITodo {
    title: string;
    body: string | null;
    completed: boolean;
    id?: string;
    createdAt?: Date;
    user_id: string;
}