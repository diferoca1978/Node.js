import { describe, test, it, expect } from "@jest/globals";
import { emailTemplate } from "../../src/js-foundations/01-template";

describe("js-foundation/01-template.ts", () => {
  test("emailtemplate should contain a greeting", () => {
    expect(emailTemplate).toContain("Hi, ");
  });
  test("emailTemplate should contains the word Thanks and {{name}}", () => {
    expect(emailTemplate).toContain("Thank");
    expect(emailTemplate).toMatch(/{{OrderId}}/);
  });
});
