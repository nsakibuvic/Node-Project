# Welcome to the Simpplr code test exercise

We've include a data structure from our production application. This is a simplified representation of blocks in our drag and drop block editor.

Each block has:

1. A unique string ID
2. A type - for simplicity we've only included PlainText, Column, Layout, and Image
3. options - an object literal which configures how the block should look and behave
4. data - an object literal where a block can store arbitrary data it needs, this could be the original dimensions of an image or the text in a block.
5. children - an array of child blocks. Blocks can be nested inside of each other a bit like the DOM.

In theory the tree could be any depth, the code you write for this test should factor that in. We've included a screenshot in the root directory showing how the supplied example data structure might look if it was rendered out as HTML to help you understand in a more visual manner.

## What do we want you to do?

1. Write a function which takes a single parameter, a block, and recursively loops over it looking for blocks with the type `Image`. It should return a flat array of all image URLs for these blocks.
2. Write a function which takes 3 parameters, a block and 2 IDs. The block with the first ID must be moved and set as the last child of the block with the second ID. Return a modified block. If for whatever reason the operation can't be completed, throw an error.
3. Write a function which takes 2 parameters, a block and an ID. Find the block denoted by the ID and return an array of it's parent's IDs. They should be ordered from highest ID in the tree to lowest. If the block doesnt exist then return `false`.
4. Write a function which takes 2 parameters, a block and a type. Return a block where all of the blocks which match the second parameter have been removed. If the type parameter matches the root block, return null.
5. Write a function which takes a block and returns it's structure as a string. The same as what you'd see if you do `yarn list`. For each node, output the ID and the type of block.

Feel free to use the blocks defined in `src/block.ts` as fixtures for your tests.

## What are we looking for?

We'll be judging you on the following:

- Clear, concise, readable JavaScript or TypeScript - use whatever you're most comfortable with
- A functional approach to solving problems
- A good understanding of recursion and immutability
- Robust unit tests that cover more than just the happy path
- Well written types for functions, variables and data structures (if you're using TS).

If you find you don't have time to do all 5 functions we won't mark you down, however please ensure the ones you have attempted are correct and well tested.

## Before you begin

Firstly, **create a branch for your work** - you will be submitting via a Pull Request so it's important you work in a separate branch. It doesn't matter what you call it.

This repository fork has been created specifically for you - no other candidates will be able to see your work.

The rules for this exercise are as follows:

1. Only work inside the `src/` directory
2. Feel free to use 3rd party libraries to help you
3. Try to make small, atomic commits (i.e. for each change) so we can see how you work more easily
4. Don't spend more than 2 hours on this exercise

## Running the application

After you've cloned your branch locally, you need to run it. We use Yarn as our package manager of choice. We've setup some scripts to get you started:

```
# install dependencies
yarn

# run the index.ts file
yarn output

# run all tests
yarn test

# run jest in watch mode
yarn test:watch
```

## Submitting your work

When you're ready to submit you should create a Pull Request to merge your branch into `main`. Once you've made the Pull Request, feel free go through the diff and add any inline comments to explain your thinking and approach to solutions.

Once that's done, send a link to the pull request to your interviewer so we know your work is ready to be reviewed.
