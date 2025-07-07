export function mapWithLocalization(items, texts) {
  return items.map((item) => ({
    ...item,
    text: texts[item.key] || '',
  }));
}
