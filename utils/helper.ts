export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const formatDate = (value: Date): string => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    weekday: "short",
    day: "2-digit",
    year: "numeric",
  }).format(value);
};

export const generateRandomHex = (length: number) => {
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
};

export const enumFormatter = (inputEnum: string) => {
  return inputEnum
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

export const convertEmptyStringsToNull = (obj: Record<string, any>) => {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value === "" ? null : value,
    ])
  );
};
