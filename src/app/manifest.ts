import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Sathwik H Naik · Data Portfolio", short_name: "Sathwik Naik", description: "Data Engineer and Data Scientist portfolio", start_url: "/", display: "standalone", background_color: "#071018", theme_color: "#071018", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
