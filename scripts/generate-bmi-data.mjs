import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const CDC_URL =
    "https://www.cdc.gov/growthcharts/data/extended-bmi/bmi-age-2022.csv";

const outputPath = path.resolve(
    "src/calculators/bmi/bmi.data.ts"
);

const response = await fetch(CDC_URL);

if (!response.ok) {
    throw new Error(
        `Failed to download CDC BMI data: ${response.status} ${response.statusText}`
    );
}

const csv = await response.text();

const lines = csv
    .trim()
    .split(/\r?\n/);

const headers = lines[0]
    .split(",")
    .map((header) => header.trim());

const rows = lines.slice(1).map((line) => {
    const values = line.split(",");

    return Object.fromEntries(
        headers.map((header, index) => [
            header,
            values[index],
        ])
    );
});

const data = rows.map((row) => ({
    sex: Number(row.sex),
    ageMonths: Number(row.agemos),
    L: Number(row.L),
    M: Number(row.M),
    S: Number(row.S),
    sigma: Number(row.sigma),
    P95: Number(row.P95),
}));

const output = `export interface BMIReferenceData {
    sex: 1 | 2;
    ageMonths: number;
    L: number;
    M: number;
    S: number;
    sigma: number;
    P95: number;
}

export const bmiReferenceData: BMIReferenceData[] = ${JSON.stringify(
    data,
    null,
    4
)};
`;

await mkdir(
    path.dirname(outputPath),
    { recursive: true }
);

await writeFile(
    outputPath,
    output,
    "utf8"
);

console.log(
    `Generated ${data.length} CDC BMI reference records.`
);

console.log(
    `Output: ${outputPath}`
);