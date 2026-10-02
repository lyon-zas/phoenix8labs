import { onRequestPost as __api_contact_ts_onRequestPost } from "C:\\Users\\ISND\\Documents\\pheonix\\Phoenix 8 Labs\\functions\\api\\contact.ts"
import { onRequest as __api_contact_ts_onRequest } from "C:\\Users\\ISND\\Documents\\pheonix\\Phoenix 8 Labs\\functions\\api\\contact.ts"

export const routes = [
    {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_contact_ts_onRequestPost],
    },
  {
      routePath: "/api/contact",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_contact_ts_onRequest],
    },
  ]