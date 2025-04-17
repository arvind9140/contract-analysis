import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();

const redis = new Redis({
  url:
    process.env.UPSTASH_REDIS_REST_URL ||
    "https://whole-skink-50523.upstash.io",
  token:
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    "AcVbAAIjcDEwNDk0MjQyNjFhZDk0MDkwYWZhZDEzMTFlMGIxNTAxZXAxMA",
});

export default redis;
