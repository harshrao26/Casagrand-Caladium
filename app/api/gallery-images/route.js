import { readdir } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];

async function getFolderImages(folder) {
  try {
    const dir = join(process.cwd(), "public", folder);
    const files = await readdir(dir);
    return files
      .filter((f) => IMAGE_EXTENSIONS.includes(f.slice(f.lastIndexOf(".")).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((f) => `/${folder}/${f}`);
  } catch {
    return [];
  }
}

export async function GET() {
  const [elevation, indoor, amenities] = await Promise.all([
    getFolderImages("elevation"),
    getFolderImages("indoor"),
    getFolderImages("amenities"),
  ]);

  return NextResponse.json({ elevation, indoor, amenities });
}
