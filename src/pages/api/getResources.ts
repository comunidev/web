import type { APIRoute } from "astro";

export const GET: APIRoute = (req) => {

  return new Response("Hello World!")
}
