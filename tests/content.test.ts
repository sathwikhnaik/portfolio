import { describe, expect, it } from "vitest";
import { education, experience, profile, projects, skillGroups } from "../src/data/portfolio";

describe("portfolio content", () => {
  it("publishes all eight projects with unique slugs", () => {
    expect(projects).toHaveLength(8);
    expect(new Set(projects.map((project) => project.slug)).size).toBe(projects.length);
  });

  it("keeps every project case study decision-ready", () => {
    for (const project of projects) {
      expect(project.summary.length).toBeGreaterThan(40);
      expect(project.metrics.length).toBeGreaterThanOrEqual(3);
      expect(project.architecture.length).toBeGreaterThanOrEqual(4);
      expect(project.outcomes.length).toBeGreaterThanOrEqual(3);
      expect(project.stack.length).toBeGreaterThanOrEqual(4);
    }
  });

  it("contains the required professional sections and public contact choices", () => {
    expect(profile.title).toBe("Data Engineer & Data Scientist");
    expect(profile.email).toContain("@");
    expect(profile).not.toHaveProperty("phone");
    expect(experience.length).toBeGreaterThan(0);
    expect(skillGroups.length).toBeGreaterThanOrEqual(6);
    expect(education.length).toBe(2);
  });
});
