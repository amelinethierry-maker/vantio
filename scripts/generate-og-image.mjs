import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logo = join(root, "public", "logo_vantio2.png");
const out = join(root, "public", "og-image.jpg");

const W = 1200, H = 630;
const logoResized = await sharp(logo).resize(700, null, { fit: "inside" }).toBuffer();

await sharp({
  create: { width: W, height: H, channels: 3, background: { r: 255, g: 255, b: 255 } },
})
  .composite([{ input: logoResized, gravity: "center" }])
  .jpeg({ quality: 90 })
  .toFile(out);

console.log("OG image générée : public/og-image.jpg");
