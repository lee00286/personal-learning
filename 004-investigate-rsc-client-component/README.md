# Server Component and Client Component

Subject: Optimizing Bundle Size with RSC and Component Composition

Objectives:
- To understand the internal mechanics of data structures like `Object` and `Map` in JavaScript and manage data efficiently using hash functions.
- To compare hash algorithms and implement a collision-resistant data structure.

## Implementation

- Interleaving Strategy: Implemented the `children` pattern (Composition) to nest Server Components within Client Components without forcing them into the client bundle.
- Bundle Analysis: Used `@next/bundle-analyzer` to verify that heavy libraries (e.g., date-fns) are completely excluded from the browser bundle when used exclusively within Server Components

### Testing Locally

```bash
npm install

# Server Component Analysis
npm run build:analyze

# Client Component Analysis
# In Parent component, comment out ChildServer and uncomment ChildClient
npm run build:analyze
```

Check the opened analysis report for the results.

## Key Takeaways

- Bundle Optimization: Successfully reduced Client JS by offloading non-interactive logic to the server.
- RSC Life Cycle: Understood why hooks like `useState` and `useEffect` are restricted to Client Components due to the absence of browser APIs and persistence in the server environment.
- Strategic component design in Next.js is not just about functionality but about maximizing performance (TTI/LCP) by trimming unnecessary client-side overhead.
