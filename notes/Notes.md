<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

# Notes

- [Notes](#notes)
- [TODO’s](#todos)
- [Hooks](#hooks)
  - [Effect Hook](#effect-hook)
- [Data Fetching](#data-fetching)
- [Rendering](#rendering)
  - [Static Rendering](#static-rendering)
  - [Dynamic Rendering](#dynamic-rendering)
    - [Choosing how to fetch data](#choosing-how-to-fetch-data)
      - [API layer](#api-layer)
      - [Database queries](#database-queries)
    - [Using Server Components to Fetch Data](#using-server-components-to-fetch-data)
    - [Using SQL](#using-sql)
  - [TypeScript](#typescript)
    - [Interface](#interface)
- [Mock Data](#mock-data)
- [Tailwind CSS](#tailwind-css)
  - [`global.css`](#globalcss)
  - [CSS Module](#css-module)
    - [CSS Rendering](#css-rendering)
  - [DaisyUI](#daisyui)
  - [shadcn/ui](#shadcnui)
  - [Tabler Icons](#tabler-icons)
- [Google Books](#google-books)
  - [Axios](#axios)
    - [CommonJS Usage](#commonjs-usage)
- [Links](#links)

<!-- /code_chunk_output -->

# TODO’s

- [ ] Hook to Google Books API

# [Hooks][1]

Hooks are **functions** that let you "hook into" React **state** and lifecycle features form function components.

- Hooks don't work inside classes - they let you use React without classes.

## Effect Hook

"Side effects" (or "effects" for short) can affect other components and can't be done during rendering. E.g.:

- data fetching
- subscriptions
- manually changing the DOM from React components

The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

```js
import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

# Data Fetching

- NextJS comes with a built-in data cache

  ```js
  // A. Get Data
  // 1. Data is stored in the built-in cache (DEFAULT)
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");

  // 2. Disable cacheing when data changes frequently
  const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
    cache: "no-store",
  });

  // 3. Get fresh data every 10 seconds
  const res = await fetch("https://jsonplaceholder.typicode.com/users/", {
    next: { revalidate: 10 },
  });

  // B. Convert response to json
  const users = response.json();
  ```

# Rendering

<!-- ![Rendering](diagrams/rendering.drawio.svg) -->

## Static Rendering

- Render at build time
- By default, `fetch()` caches responses.

## Dynamic Rendering

- Render at request time

### Choosing how to fetch data

#### API layer

APIs are an intermediary layer between your application code and database. There are a few cases where you might use an API:

- If you're using 3rd party services that provide an API
- If you're fetching data from the client, you want to have an API layer than runs on the server to avoid exposing your database secrets to the client.

#### Database queries

When you're creating a full-stack application, you'll also need to write logic to interact with your database. For relational databases like Postgres, you can od this with SQL or with an ORM.

There are a few cases where you have to write database queries:

- When creating your API endpoints, you need to write logic to interact with your database.
- **If you're using React Server Components (fetching data on the server), you can skip the API layer**, and query your database directly without risking exposing your database secrets to the client.

### Using Server Components to Fetch Data

By default, Next.js applications use React Server Components. Fetching data with Server Components is a relatively new approach and there are a few benefits of using them:

- Server Components support promises, providing a simpler solution for asynchronous tasks like data fetching. You can use `async/await` syntax without reaching out for `useEffect`, `useState` or data fetching libraries.
- Server Component execute on the server, so you can keep expensive data fetches and logic on the server and only send the result to the client.
- As mentioned before, since Server Component execute on the server, you can query the database directly without an additonal API layer.

### Using SQL

- SQL is the industry standard for querying relational databases (e.g. ORMs generate SQL under the hood).
- Having a basic understanding of SQL can help you understand the fundamentals of relational databases, allowing you to aooly your knowledge to other tools.
- SQL is versatile, allowing you to fetch and manipulate specific data.
- \*The Vercel Postgres SDK provides protection against SQL injections.

## TypeScript

### Interface

An interface declaration is another way to name an object type:

```js
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
```

# Mock Data

[{JSON} Placeholder][2] is a mock data API.

```js
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
/**
 * {
 * "userId": 1,
 * "id": 1,
 * "title": "delectus aut autem",
 * "completed": false
 * }
 */
```

# Tailwind CSS

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.

- Includes many [small utility classes][3], like Padding, Margins, etc.
- [Customize color palette][4]
- Designed to be used directly on the component do we don’t have to jump back and forth between the component and the CSS
  - [Separation of Concern][5] is a design principle for separating a software program into distinct sections such that each section addresses a separate “concern” or a set of information that affects the code of a software program. It is one of the most important concepts that a web solutions architect must internalize.
- Easy to clean up because we never added CSS of our own

## `global.css`

- Only keeps styles here that are truly global
- For styles specific to a page or component, use css modules or Tailwind.

## CSS Module

A CSS file that is scoped to a component/page. This prevents CSS classes from clashing.

- Page file: `app/components/<moduleName>.tsx`
- CSS module file: `app/components/<moduleName>.module.css`

```js
/** ProductPage.tsx */
import AddToCart from "./AddToCart";

// Import CSS module
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    // Use CSS module styles
    <div className={styles.card}>
      <h1>Product Card</h1>
      <p>This is a product card.</p>
      <AddToCart />
    </div>
  );
};

export default ProductCard;
```

### CSS Rendering

- If we inspect elements, we see a class name generated by tailwind. This helps to prevent clashing of class names.

  ```html
  <!-- Notice the class name -->
  <div class="ProductCard_card__KLyHh">
    <h1>Product Card</h1>
    <p>This is a product card.</p>
    <h1>AddToCart</h1>
  </div>
  ```

- `postcss.config.js`

  ```js
  module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  ```

## [DaisyUI][6]

The most popular component library for Tailwind CSS.

## [shadcn/ui][7]

> Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

```js
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Everything in /ui/ is installed from shadcn ui

const Dashboard = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb2">
        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">$45,000</div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          +20.1% from lst month.
        </p>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
```

- [NextJS Installation][8]

## [Tabler Icons][9]

```html
<button>
  <IconBrandGoogle />
</button>
```

# Google Books

## Axios

[Axios][10] is a [promise-based][11] HTTP Client for `node.js` and the browser. It is _isomorphic_ (= it can run in the browser and nodejs with the same codebase).

On the server-side, it uses hte native node.js `http` module, while on the client (browser) it uses `XMLHttpRequests`.

### [CommonJS][12] Usage

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```js
const axios = require("axios").default;

// axios.<method> will now provide autocomplete and parameter typings
```

# Links

[1]: https://react.dev/reference/react/hooks
[2]: https://jsonplaceholder.typicode.com/
[3]: https://tailwindcss.com/docs/utility-first
[4]: https://tailwindcss.com/docs/customizing-colors
[5]: https://www.newtarget.com/web-insights-blog/separation-of-concerns-in-web-design-and-development/#:~:text=Separation%20of%20Concerns%20(SoC)%20is,web%20solutions%20architect%20must%20internalize.
[6]: https://daisyui.com/docs/use/
[7]: https://ui.shadcn.com/docs
[8]: https://ui.shadcn.com/docs/installation/next
[9]: https://tabler.io/docs/getting-started
[10]: https://axios-http.com/docs/intro
[11]: https://javascript.info/promise-basics
[12]: https://axios-http.com/docs/example
