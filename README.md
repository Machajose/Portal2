# MUT Student Portal — React Practice Recreation

A front-end-only recreation of the supplied student portal screenshots. It is intended for learning React components, props, state, conditional rendering, and CSS styling.

## Run it locally

1. Install Node.js (LTS) if you do not already have it.
2. Extract this ZIP and open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

To test a production build, run `npm run build`.

## Learn React with this project

- `Header` and `MenuIcon`: reusable components and props.
- `MetricCard`: one component reused for multiple fee summary cards.
- `InfoRow`: a reusable label/value row.
- `Dashboard` and `StudentProfile`: separate page sections.
- `App`: `useState` controls which page is shown and whether the navigation menu is open.
- `styles.css`: responsive layout, colors, spacing, and typography.

### Suggested experiments

1. Change `--green` and `--deep-green` in `src/styles.css`.
2. Add a new item to the menu.
3. Change the props passed to each `MetricCard`.
4. Create a `StudentBadge` component and render it in the dashboard.
5. Move the sample student details into a JavaScript object and pass values as props.
6. Add a third page using the same navigation state pattern.

## Important

This project is not connected to MUT systems and does not log in, fetch data, or make payments. Sensitive personal fields have been masked and the contact information is fictional. The logo is a CSS placeholder, not an official university logo. Do not use it to impersonate the real portal or enter real credentials.
