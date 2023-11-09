# boilerplates

Life is too short to start new projects from scratch. Thus, this repo is a collection of boilerplates for technologies I use the most.

Each boilerplate will live in its own branch. A branche will be maintained as long as I fancy the stack. use them at **your own risk**.

> :warning: If a branch hasn't received any commits in a significant period, be aware of depreciation. :warning:

## Branches:

- `react` : Building SPA never been this amazing.
- `Next14` : Ride the hype with React Server Components (WIP).
- `quick-node` : Get something started quick for testing.

Coming soon:
- `hono` : Ditch node+express and use this instead.
- `node-ts` : regular node+ts.

## Usage with [degit](https://github.com/Rich-Harris/degit)

`degit` is tool that allows downloading code fron any git repo *with fashion*.

For instance, we're going to use degit to download the boilerplates directly from the associated branches.

Start by installing `degit` globally:

```sh
npm install -g degit
```

Use the following command to initiate a project from a boilerplate (branch):
```sh
degit jihedmastouri/boilerplates#<branch-name> <your-project-name>
```
> Leave the `<your-project-name>` blank to initiate the project in the same directory.





