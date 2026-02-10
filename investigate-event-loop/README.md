# Node.js Event Loop & Asynchronous Architecture

Subject: Node.js Event Loop & Asynchronous Architecture

Objective: To understand how Node.js handles concurrent requests using a single-threaded event loop and non-blocking I/O.

### Testing Locally

```bash
node script-1.js
node script-2.js
```

Check the console output for the results.

## Technical Insights

Task Priority: Verified the execution order - Sync Code > `process.nextTick` > Promises (Microtasks) > `setTimeout`/`setImmediate` (Macrotasks).

Blocking the Loop: Analyzed how synchronous operations (e.g., readFileSync) or CPU-intensive tasks can starve the event loop, leading to increased latency for all concurrent users.

## Key Takeaways

- To maintain high availability in a high-traffic environment, offload heavy computations to Worker Threads or external services and strictly avoid blocking the main thread.
