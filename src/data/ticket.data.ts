import { Ticket } from "../utils/interfaces";

export const tickets: Ticket[] = [
    {
        id: 1,
        qrCode: 390848298470,
        status: "VALID",
        price: 1000,
        userId: 2
    },
    {
        id: 2,
        qrCode: "987676343433",
        status: "USED",
        price: 1000,
        userId: 1
    },
    {
        id: 3,
        qrCode: "822227383939",
        status: "EXPIRED",
        price: 1000,
        userId: 2
    },
    {
        id: 4,
        qrCode: "748873872929",
        status: "EXPIRED",
        price: 1000,
        userId: 2
    }
];