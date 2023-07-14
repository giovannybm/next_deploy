import { generateConfigPWA } from "@/config";

export async function GET(request: Request) {
  let { pathname } = new URL(request.url);
  let tenant = pathname.split("/");

  return new Response(generateConfigPWA(tenant[1]), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": "attachment",
    },
  });
}
