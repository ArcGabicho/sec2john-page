import type { APIRoute } from "astro";
import data from "../../data/sec2john.json";

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};