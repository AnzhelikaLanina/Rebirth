type ItemWithKey = {
  key: string;
  [key: string]: any;
};

export function mapWithLocalization<
  T extends ItemWithKey,
  Field extends string,
>(
  items: T[],
  texts: Partial<Record<string, unknown>>,
  fieldName: Field,
): Array<Omit<T, Field> & { [K in Field]: string }> {
  return items.map((item) => ({
    ...item,
    [fieldName]:
      typeof texts[item.key] === 'string' ? (texts[item.key] as string) : '',
  }));
}
