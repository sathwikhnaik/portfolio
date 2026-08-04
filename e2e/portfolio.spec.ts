import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("homepage exposes the complete portfolio and passes automated accessibility checks", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Engineering data");
  await expect(page.locator(".project-card")).toHaveCount(8);
  await expect(page.getByRole("link", { name: /Download résumé/i })).toHaveAttribute("href", "/Sathwik-Naik-Resume.pdf");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test("theme control persists an explicit preference", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Toggle color theme/i }).click();
  const selected = await page.locator("html").getAttribute("data-theme");
  expect(["light", "dark"]).toContain(selected);
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("data-theme", selected!);
});

test("project routes provide architecture, outcomes, and next navigation", async ({ page }) => {
  await page.goto("/projects/claims-lakehouse-platform");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Healthcare Claims");
  await expect(page.getByText("System architecture")).toBeVisible();
  await expect(page.getByText("Measured outcomes")).toBeVisible();
  await expect(page.getByText("Next project")).toBeVisible();
});

test("reduced-motion visitors receive a stable hero", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".data-flow")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});
