import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("preview", "routes/preview.tsx",),
    route("editor", "routes/editor.tsx",)
] satisfies RouteConfig;
