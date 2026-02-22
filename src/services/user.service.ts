import { users } from "../data/user.data";
import { User } from "../utils/interfaces";


export const UserService = {
    getAll() {
        return [...users];
    },
    findById(userId: number) {
        return users.find(u => u.id === userId);
    }
}