import { User } from "../utils/interfaces";

export const users: User[] = [
    {
        id: 1,
        fullname: "Aly Tall Niang",
        email: "atn@example.com",
        password: "1234567890",
        role: "ADMIN",
        isActive: true,
    },
    {
        id: 2,
        fullname: "Pape Diop",
        email: "pape@example.com",
        password: "0987654321",
        role: "CASHIER",
        isActive: true,
    },
    {
        id: 3,
        fullname: "Moussa Ba",
        email: "mouss@example.com",
        password: "passer123",
        role: "CONTROLLER",
        isActive: true,
    }
]