// declare global interface
declare global {
  // open global namespace
  interface Window {
    // open Window interface
    isDevelopment: boolean;
  }
}
declare const isDevelopment: boolean;
// declare function search(term: string, tags?: string[]): Promise<Result[]>; // don't use async keyword in declaration
