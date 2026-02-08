# Investigate Rendering Strategy

Subject: Deep Dive into Next.js Rendering Strategies

Objective: Understanding the trade-offs between CSR, SSR, SSG, and ISR to optimize performance and server resources in large-scale applications.

## Technical Implementation

Implemented four rendering modes using Next.js App Router.

Analyzed network payloads (Preview vs. Response) to verify Server-Side Rendering vs. Client-Side Hydration.

Measured performance metrics using Lighthouse; confirmed that SSG/ISR provide superior LCP/FCP by serving pre-rendered static files.

### Testing Locally

```bash
npm install
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Note: You will not be able to test SSG or ISR with `npm run dev`, since it won't pre-build the pages.

## Key Takeaways

- Choosing a rendering strategy is a matter of balancing Data Freshness vs. Server Load.
- For high-traffic real-time data, a hybrid approach (SSR for SEO/Initial Load + Client-side fetching for updates) is optimal.
- Streaming SSR with Selective Hydration (React 18+) can also be considered for high-traffic real-time data.
