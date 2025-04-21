/**
 * Created: 2025-04-21 by Marco Trinastich
 */

export class Utilities {
  /**
   * Assigns default properties to an object.
   * @param target The target object to assign defaults to.
   * @param defaults The default properties to apply.
   * @returns The target object with defaults applied.
   */
  static defaults<T extends object>(target: T, defaults: Partial<T>): T {
    if (!target || typeof target !== "object") {
      throw new TypeError("Target must be an object.");
    }
    if (!defaults || typeof defaults !== "object") {
      throw new TypeError("Defaults must be an object.");
    }

    for (const key in defaults) {
      if (
        Object.prototype.hasOwnProperty.call(defaults, key) &&
        target[key] === undefined
      ) {
        target[key] = defaults[key];
      }
    }
    return target;
  }

  /**
   * Checks if a value is undefined.
   * @param value The value to check.
   * @returns True if the value is undefined, false otherwise.
   */
  static isUndefined(value: any): boolean {
    return value === undefined;
  }

  /**
   * Checks if a value is in a collection (array, string, or object).
   * @param collection The collection to search.
   * @param value The value to search for.
   * @returns True if the value is found, false otherwise.
   */
  static includes(collection: any, value: any): boolean {
    if (Array.isArray(collection) || typeof collection === "string") {
      return collection.includes(value);
    }
    if (collection && typeof collection === "object") {
      return Object.values(collection).includes(value);
    }
    return false;
  }
}
