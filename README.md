This is an Express project with TypeScript

## Getting Started

About the project structure

The project structure is in line with the best practices of the community, by separating each functional module into its own folder, for example routes, controllers, services, etc.

Additionally each folder has an index.ts file for cleaner exporting/importing of the functionality.

This solution has an integrated error handling middleware, and some custom user-defined errors, that could be thrown in cases that are not fatal.

The approach I took was creating a service, that handles the requesting(with the help of axios) from the close.com API, as explained in the technical task.

Now, for using the app.

First, run the development server:

```bash
npm dev
# or
yarn dev
```

Now the server is accessible on http://localhost:8000 (or the PORT key specified in the .env file).

This server has a router for Close.com integration, available at /api/close-pipelines, with 2 endpoints:

GET '/', for fetching all the pipelines of the user, identified by the CLOSE_API_KEY in the .env file

GET '/:pipelineId/opportunities', for fetching all opportunities for a single pipeline, :pipelineId param being the id of the necessary pipeline

## Utilities

This project has eslint integrated with prettier, so for linting run:

```bash
npm lint
# or
yarn lint
```

And for formatting run:

```bash
npm format
# or
yarn format
```

## Creating a build

For building the app run:

```bash
npm build
# or
yarn build
```

After running this command, the build can be started:

```bash
npm start
# or
yarn start
```
