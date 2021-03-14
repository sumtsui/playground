## package-lock.json

https://docs.npmjs.com/cli/v6/configuring-npm/package-lock-json

This file is intended to be committed into source repositories, and serves various purposes:

    Describe a single representation of a dependency tree such that teammates, deployments, and continuous integration are guaranteed to install exactly the same dependencies.

    Provide a facility for users to "time-travel" to previous states of node_modules without having to commit the directory itself.

    To facilitate greater visibility of tree changes through readable source control diffs.

    And optimize the installation process by allowing npm to skip repeated metadata resolutions for previously-installed packages.

## `npm i`

https://docs.npmjs.com/cli/v6/commands/npm-install

## `npm ci`

https://docs.npmjs.com/cli/v6/commands/npm-ci

In short, the main differences between using npm install and npm ci are:

    The project must have an existing package-lock.json or npm-shrinkwrap.json.
    If dependencies in the package lock do not match those in package.json, npm ci will exit with an error, instead of updating the package lock.
    npm ci can only install entire projects at a time: individual dependencies cannot be added with this command.
    If a node_modules is already present, it will be automatically removed before npm ci begins its install.
    It will never write to package.json or any of the package-locks: installs are essentially frozen.
