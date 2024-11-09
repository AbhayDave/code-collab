import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string; // or whatever type you expect for user ID
        username?: string;
        githubId?: string;
        // Add other properties as needed
      };
    }
  }
}
