https://nodesource.com/blog/semver-a-primer/

### Tilde & Caret Shorthand

Node.js' implementation of semver also introduces shorthand ranges: `~` (tilde) and `^` (caret). The general explanation for how these work is:

- Prefixing a single semver version string with the `~` character defines a *range* of acceptable versions that include all **patch** versions from the one specified up to, but not including, the next minor version. `"~1.2.3"` can be approximately expanded as `">=1.2.3 <1.3.0"`.
- Prefixing a single semver version string with the `^` character defines a *range* of acceptable versions that include all **patch and minor** versions from the ones specified up to, but not including, the next version. So `"^1.2.3"` can be approximately expanded as `">=1.2.3 <2.0.0"`.



