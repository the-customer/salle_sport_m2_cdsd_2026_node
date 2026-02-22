import { users } from "../data/user.data"
import { signToken } from "../utils/jwt";

export const AuthService = {
    login(email: string, password: string) {
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            const error = new Error('Invalid credentials!') as any;
            error.status = 401;
            throw error;
        }
        //generate a jwt token
        const token = signToken({ id: user.id, role: user.role })
        return {
            // token: "This@Is#A1Very.Fake%Token",
            token,
            user
        }
    }
}