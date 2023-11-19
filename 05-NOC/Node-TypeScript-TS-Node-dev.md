# Steps to configurate Node with TypeScript and TS-Node-dev

1. Install TypeScript and others dependencies.

```
npm i -D typescript @types/node ts-node-dev rimraf

```

2. Starting the configuration file of TypeScript.

```
npx tsc --init --outDir dist/ --rootDir src
```

3. Create scripts to dev, build and start onto package.json file. More information about TS-Node-dev here(https://www.npmjs.com/package/ts-node-dev)

```
"dev": "tsnd --respawn --clear src/app.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"
```

4. Create our entry point file onto src folder.

```
src/app.ts
```

5. Then include by default inside the tsconfig.json file the lines below

```
"exclude": ["node_modules", "dist"],
"include": ["src"]
```
