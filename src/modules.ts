// if a file doesn't have top level await or export / import, it will be treated as a script loaded globally with a script tag

// add this to any file to turn it into a module
// modules have their own scope
export {};

// to consider:
// 1. module syntax (ES modules? Common JS? ...)
// 2. module resolution
// 3. module output target

// what ts adds to the imports
// import type = indicates we only import types
// import { createCatName, type Cat, type Dog } from "./animal.ts"; = indicate what imports are types

// relevant config options
// esModuleInterop
// module
// moduleResolution, baseUrl, paths, rootDirs
// target

// namespaces = module implementation of ts prior to ES modules. ES modules have the majority of the features of namespaces, so ES Modules are preferred
