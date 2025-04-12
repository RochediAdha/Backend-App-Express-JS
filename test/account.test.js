// import supertest from "supertest";
require("supertest");
import { app } from "../src/application/app.js";
import { prismaClient } from "../src/application/database.js";
// import { describe, it, expect, afterEach } from "@jest/globals";
import * as JestGlobals from "@jest/globals";
const { describe, it, expect, afterEach } = JestGlobals;

// import pkg from "@jest/globals";
// const { describe, it, expect, afterEach } = pkg;

describe("POST /account", function () {
  afterEach(async () => {
    await prismaClient.accounts.deleteMany({
      where: {
        username: "test",
      },
    });
  });

  test("should can register new account", async () => {
    const result = await supertest(app).post("/account").send({
      username: "test",
      password: "rahasia",
      name: "Test User",
    });
    expect(result.status).toBe(200);
    expect(result.body.data.username).toBe("test");
    expect(result.body.data.name).toBe("Test User");
    expect(result.body.data.password).toBeUndefined();
  });
});
