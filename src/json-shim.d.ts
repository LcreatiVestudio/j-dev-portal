declare module "*.json" {
  interface JSON {
    [Symbol.iterator](): Iterable<String>;
  }
}

export interface JSONF extends Object {
  [Symbol.iterator](): Iterable<String>;
}
