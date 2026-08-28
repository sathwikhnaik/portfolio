import { expect, test } from "@playwright/test";
import path from "node:path";

test("captures the complete responsive homepage", async ({ page }, testInfo) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.screenshot({
    path: path.join("output", "playwright", `home-${testInfo.project.name}.png`),
    fullPage: true,
    animations: "disabled",
  });
});
