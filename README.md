# Yeraltı - SvelteKit

<img width="1439" alt="Screenshot 2024-12-28 at 21 36 13" src="https://github.com/user-attachments/assets/7f60d13d-2292-4df7-bd94-0204fcd6f7f7" />
<img width="503.7" alt="Screenshot 2024-12-27 at 20 49 23" src="https://github.com/user-attachments/assets/0dcc35fa-b667-4597-b4e5-3096b02937a6" />
<img width="503.7" alt="Screenshot 2024-12-28 at 21 39 23" src="https://github.com/user-attachments/assets/2f6c46ef-4815-47c7-85e3-b4b623673b34" />

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
