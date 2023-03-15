import { createTRPCRouter } from "@/server/api/trpc";
import { submitRouter } from "@/server/api/routers/submit";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  submit: submitRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
