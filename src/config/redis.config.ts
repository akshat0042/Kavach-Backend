
import { createClient } from "redis";

export const client = createClient({
  username: "default",
  password: process.env.REDIS_PASSWD,
  socket: {
    host: String(process.env.REDIS_HOST),
    port: parseInt(process.env.REDIS_PORT || ""),
  },
});


};
