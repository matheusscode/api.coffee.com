import { Router } from "express";

const router: Router = Router({
  mergeParams: true,
});

router.get("/", (_, res) => {
  res.json({ message: "Olá, bem-vindo à API!" });
});

export { router };
