export const pluralize = (num: number, forms: string[]) => {
  if (!Array.isArray(forms) || forms.length === 0) return '';
  if (forms.length === 2) return num === 1 ? forms[0] : forms[1]; // en
  const [one, few, many] = forms as [string, string, string]; // ru
  const mod10 = num % 10;
  const mod100 = num % 100;
  if (mod10 === 1 && mod100 !== 11) return one;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return few;
  return many;
};
