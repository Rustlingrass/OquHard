import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUniqueByAttribute = (arr: any[], attribute: string) => {
  const seen = new Map();
  return arr.filter((item) => {
    const attributeValue = item[attribute];
    if (seen.has(attributeValue)) {
      return false;
    }
    seen.set(attributeValue, true);
    return true;
  });
};
