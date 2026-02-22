import app from "./app";
import { env } from "./config/env";


const start = () => {
    app.listen(env.port, () => {
        console.log(`Server running on port :${env.port}`)
    })
}


start();
