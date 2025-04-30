const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const pkg = require("../package.json");

// Get the dist folder name by removing -lib suffix
const pkgName = pkg.name.replace(/-lib$/, "");
const distPath = path.join("dist", pkgName);
const projectPath = path.join("projects", pkgName);

// Get command from arguments
const command = process.argv[2] || "help";

// Ensure the project folder exists
function checkProjectFolder() {
  if (!fs.existsSync(projectPath)) {
    console.error(`Error: ${projectPath} directory not found`);
    process.exit(1);
  }
}

// Copy README.md and LICENSE to the project folder
function copyFilesToProject() {
  checkProjectFolder();

  const filesToCopy = ["README.md", "LICENSE"];
  filesToCopy.forEach((file) => {
    const srcPath = path.join(__dirname, "..", file);
    const destPath = path.join(projectPath, file);

    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to ${projectPath}`);
    } else {
      console.warn(`Warning: ${file} not found in the root directory`);
    }
  });
}

// Modify and copy package.json to the project folder
function copyAndModifyPackageJson() {
  checkProjectFolder();

  // const modifiedPkg = {
  //     ...pkg,
  //     name: pkg.name.replace(/-lib$/, ''), // Remove -lib from the name
  //     keywords: [
  //         "tm-ng-odometer",
  //         "angular",
  //         "animated-counter",
  //         "odometer",
  //         "counter",
  //         "typescript",
  //         "angular-library",
  //         "numeric-animation",
  //         "decimal-precision",
  //         "customizable-themes",
  //         "tm-odometer"
  //     ],
  //     private: undefined, // Remove private
  //     scripts: undefined, // Remove scripts
  //     peerDependencies: {
  //         "@angular/core": pkg.dependencies["@angular/core"],
  //         "@angular/common": pkg.dependencies["@angular/common"],
  //         "rxjs": pkg.dependencies["rxjs"]
  //     },
  //     dependencies: {
  //         "tm-odometer": pkg.dependencies["tm-odometer"],
  //         "tslib": pkg.dependencies["tslib"]
  //     },
  //     devDependencies: undefined // Remove devDependencies
  // };

  // Start with the original package.json object
  const modifiedPkg = {
      ...pkg,
      name: pkg.name.replace(/-lib$/, ''), // Remove -lib from the name
      private: undefined, // Remove private
      scripts: undefined, // Remove scripts
  };

  // Remove the fields that need to be reordered
  delete modifiedPkg.dependencies;
  delete modifiedPkg.devDependencies;

  // Reassign the fields in the desired order
  modifiedPkg.keywords = [
    "tm-ng-odometer",
    "angular",
    "animated-counter",
    "odometer",
    "counter",
    "typescript",
    "angular-library",
    "numeric-animation",
    "decimal-precision",
    "customizable-themes",
    "tm-odometer",
  ];

  modifiedPkg.peerDependencies = {
    "@angular/core": pkg.dependencies["@angular/core"],
    "@angular/common": pkg.dependencies["@angular/common"],
    rxjs: pkg.dependencies["rxjs"],
  };

  modifiedPkg.dependencies = {
    "tm-odometer": pkg.dependencies["tm-odometer"],
    tslib: pkg.dependencies["tslib"],
  };

  const destPath = path.join(projectPath, "package.json");
  fs.writeFileSync(destPath, JSON.stringify(modifiedPkg, null, 2));
  console.log(`Modified package.json copied to ${projectPath}`);
}

// Make sure the dist folder exists
function checkDistFolder() {
  if (!fs.existsSync(distPath)) {
    console.log(`Building package first...`);
    copyFilesToProject(); // Copy files before the build
    copyAndModifyPackageJson(); // Copy and modify package.json before the build
    execSync("npm run build", { stdio: "inherit" });
  }

  if (!fs.existsSync(distPath)) {
    console.error(`Error: ${distPath} directory not found after build`);
    process.exit(1);
  }
}

// Run a command in the dist folder
function runInDist(cmd) {
  console.log(`Running '${cmd}' in ${distPath}...`);
  return execSync(cmd, { cwd: distPath, stdio: "inherit" });
}

// Process based on command
switch (command) {
  case "publish":
    checkDistFolder();
    runInDist("npm publish --access public");
    break;

  case "pack":
    checkDistFolder();
    runInDist("npm pack");

    // Copy the tarball to the root
    const tarballName = `${pkgName}-${pkg.version}.tgz`;
    const tarballPath = path.join(distPath, tarballName);

    if (fs.existsSync(tarballPath)) {
      fs.copyFileSync(tarballPath, tarballName);
      fs.unlinkSync(tarballPath);
      console.log(`Package tarball copied to ./${tarballName}`);
    }
    break;

  case "link":
    checkDistFolder();
    runInDist("npm link");
    console.log(`Package linked: ${pkgName}`);
    break;

  case "prebuild":
    copyFilesToProject();
    copyAndModifyPackageJson();
    break;

  default:
    console.log(
      "Usage: node scripts/npm-utils.js [publish|pack|link|prebuild]"
    );
    break;
}
