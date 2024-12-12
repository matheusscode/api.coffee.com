import { Request, Response } from "express";

export const errorMiddleware = (_: Request, response: Response) => {
  response.status(500).json({
    error: "Internal Server Error.",
  });
};
