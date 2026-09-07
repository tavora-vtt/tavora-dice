export interface DieResult {
  faces: number;
  value: number;
  kept: boolean;
  rerolled: boolean;
}

export interface RollResult {
  expression: string;
  dice: DieResult[];
  total: number;
}

export interface Rng {
  die(faces: number): number;
  dice(count: number, faces: number): number[];
}

export interface Resolver<TRequest = unknown, TFaces = unknown, TOutcome = unknown> {
  roll(request: TRequest, rng: Rng): TFaces;
  interpret(faces: TFaces, request: TRequest): TOutcome;
}

const resolvers = new Map<string, Resolver>();

export function registerResolver(name: string, resolver: Resolver): void {
  if (resolvers.has(name)) {
    throw new Error(`dice resolver "${name}" is already registered`);
  }
  resolvers.set(name, resolver);
}

export function getResolver(name: string): Resolver | undefined {
  return resolvers.get(name);
}
