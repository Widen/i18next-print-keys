# Contributing

We'd love to accept your patches and contributions to this project. There are
just a few small guidelines you need to follow.

## Code reviews

All submissions, including submissions by project members, require review. We
use GitHub pull requests for this purpose. Consult
[GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

### Tips

- Smaller changes are easier to review
- Give the PR a meaningful title and description with context surrounding the
  changes
- To close an issue automatically after a PR is merged, use keywords "fix",
  "close", or "resolve" in the PR description, e.g. fix #1337.

## Changesets

This project uses [changesets](https://github.com/atlassian/changesets) for
versioning and publishing packages. Changesets allows contributors to specify
how changes should be released without having to manually edit changelogs or
package.json files.

When making a change that requires a release, run the `yarn changeset` command
and follow the prompts to specify the semver bump and the change notes.

```sh
yarn changeset
```

After running this command, a new markdown file will be created in the
`.changeset` folder. These files should be pushed to your branch and if you make
a mistake, you can amend them at any time.

### Snapshot releases

When commits are pushed to a branch, snapshot releases will be published.
Snapshot releases are not meant for production use, but can be installed in your
application for testing purposes.

```sh
yarn add i18next-print-keys@0.0.0-branch-name-2021226204115
```
