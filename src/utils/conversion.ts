export type Base = 2 | 8 | 10 | 16;

export type ConversionResult = {
  input: string;
  fromBase: Base;
  toBase: Base;
  output: string;
};

const baseToCharset: Record<Base, RegExp> = {
  2: /^[0-1]+$/i,
  8: /^[0-7]+$/i,
  10: /^[-+]?[0-9]+$/,
  16: /^[0-9a-f]+$/i,
};

export function validateInput(input: string, base: Base): boolean {
  if (!input || typeof input !== 'string') return false;
  const normalized = input.trim().replace(/^[-+]/, '');
  return baseToCharset[base].test(normalized);
}

export function parseToBigInt(input: string, base: Base): bigint {
  const normalized = input.trim().toLowerCase();
  const isNegative = normalized.startsWith('-');
  const digits = normalized.replace(/^[-+]/, '');

  if (!validateInput(digits, base)) {
    throw new Error(`Invalid input for base ${base}`);
  }

  const value = BigInt(parseInt(digits, base));
  return isNegative ? -value : value;
}

export function bigintToString(value: bigint, base: Base): string {
  const sign = value < 0n ? '-' : '';
  const abs = value < 0n ? -value : value;
  return sign + abs.toString(base).toUpperCase();
}

export function convertNumber(input: string, fromBase: Base, toBase: Base): ConversionResult {
  if (fromBase === toBase) {
    if (!validateInput(input, fromBase)) {
      throw new Error(`Invalid input for base ${fromBase}`);
    }
    return { input, fromBase, toBase, output: input.toUpperCase() };
  }

  const big = parseToBigInt(input, fromBase);
  const out = bigintToString(big, toBase);
  return { input, fromBase, toBase, output: out };
}

export const baseLabels: Record<Base, string> = {
  2: 'Binary',
  8: 'Octal',
  10: 'Decimal',
  16: 'Hexadecimal',
};


