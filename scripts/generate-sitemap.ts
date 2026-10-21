import fs from "node:fs";
import path from "node:path";
import { calculators } from "../src/calculators/calculator.registry.ts";

const BASE_URL = "https://calcnesthub.vercel.app";

const staticRoutes = [
    "/",
    "/privacy",
    "/terms",
];

const calculatorRoutes = calculators.map((calculator) => calculator.path);

const routes = [
    ...staticRoutes,
    ...calculatorRoutes,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?> <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
    .map(
        (route) => `    <url> <loc>${BASE_URL}${route}</loc> </url>`
    )
    .join("\n")} </urlset>`;

const outputPath = path.resolve("public/sitemap.xml");

fs.writeFileSync(outputPath, sitemap, "utf8");

console.log(`Sitemap generated: ${outputPath}`);
