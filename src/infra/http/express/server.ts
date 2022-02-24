import { app } from "./app";

(function server() {
    app.listen(process.env.SERVER_PORT, () => {
        console.log("server is running in port 4000");
        console.log(`Access: http://127.0.0.1:${process.env.SERVER_PORT}`);
    });
})();
