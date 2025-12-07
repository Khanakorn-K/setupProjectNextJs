export function generateSlug(title: string): string {
  if (!title) return "";
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\u0E00-\u0E7F-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
