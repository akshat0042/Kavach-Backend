import { Request, Response, NextFunction } from "express";
import { ResponseCode } from "../utils/responseCode.enum.js";
import { verifyToken } from "../utils/webTokenUtils.js";
import userToken from "../interfaces/userToken.interface.js";

export function verifyUser(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const { authToken } = req.cookies;

    if (!authToken) {
    res.status(ResponseCode.INTERNAL_SERVER_ERROR).json({
      message: 'Internal Server Error',
    });
  }
}
