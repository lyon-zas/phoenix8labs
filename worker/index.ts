// Cloudflare Worker entry. The static export in ./out is served by the assets binding;
// only /api/* reaches this code (see run_worker_first in wrangler.jsonc).
import { handleContact, type Env } from "./contact";

type WorkerEnv = Env & { ASSETS: { fetch: (request: Request) => Promise<Response> } };

const worker = {
  async fetch(request: Request, env: WorkerEnv): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact" || pathname === "/api/contact/") {
      return handleContact(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};

export default worker;
