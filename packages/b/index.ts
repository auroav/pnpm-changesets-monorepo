import { isEven } from 'pnpm-monorepo/monorepo-pkg-a';

export const isOdd = (x: number) => !isEven(x);