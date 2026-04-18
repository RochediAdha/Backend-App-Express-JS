import request from "supertest";
import { app } from "../src/application/app.js";
import { prismaClient } from "../src/application/database.js";
import * as JestGlobals from "@jest/globals";

const { describe, it, expect, afterEach } = JestGlobals;

describe("POST /register", () => {
  afterEach(async () => {
    await prismaClient.akun.deleteMany({
      where: {
        username: "test_register_user",
      },
    });
  });

  it("should register a new account", async () => {
    const result = await request(app)
      .post("/register")
      .send({
        username: "test_register_user",
        password: "rahasia123",
        nama: "Test User",
        email: "test_register_user@example.com",
      });

    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test_register_user");
    expect(result.body.data.nama).toBe("Test User");
    expect(result.body.data.email).toBe("test_register_user@example.com");
    expect(result.body.data.password).toBeUndefined();
  });
});
