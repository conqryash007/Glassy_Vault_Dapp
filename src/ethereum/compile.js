const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");
const { readFileSync } = require("fs");

//to remove previous of build folder and its content
const buildFolderpath = path.join(__dirname, "/build");
fs.removeSync(buildFolderpath);

const glassypath = path.join(__dirname, "/contract/glassyVault.sol");
const sourceCode = readFileSync(glassypath, "utf-8");

let input = {
  language: "Solidity",
  sources: {
    "glassyVault.sol": {
      content: sourceCode,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

let output = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  "glassyVault.sol"
];
fs.ensureDirSync(buildFolderpath);

console.log(output);

for (let contract in output) {
  fs.outputJSONSync(
    path.join(buildFolderpath, contract + ".json"),
    output[contract]
  );
}
