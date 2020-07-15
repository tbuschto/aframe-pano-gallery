import * as aframe from 'aframe';

export function entity(value: unknown): aframe.Entity {
  checkEntity(value);
  return value;
}

export function string(value: unknown): string {
  checkString(value);
  return value;
}

export function stringArray(value: unknown): string[] {
  checkArrayString(value);
  return value;
}

export function checkEntity(value: unknown): asserts value is aframe.Entity {
  // Faulty aframe type declarations require eslint exception
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!(value instanceof (aframe.AEntity as any))) {
    throw new Error(`${value} is not an AEntity`);
  }
}

export function checkString(value: unknown): asserts value is string {
  if (typeof value !== 'string') {
    throw new Error(`${value} is not a string`);
  }
}

export function checkArrayString(value: unknown): asserts value is string[] {
  if (!Array.isArray(value)) {
    throw new Error(`${value} is not a string`);
  }
  value.forEach(item => {
    if (typeof item !== 'string') {
      throw new Error(`Item ${item} is not a string`);
    }
  });
}
