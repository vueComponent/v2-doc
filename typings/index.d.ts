declare module '*.json' {
  const value: any;
  export const version: string;
  export default value;
}

declare module '*.md';

export * from '../plugin/docs';
export * from '../plugin/md';
