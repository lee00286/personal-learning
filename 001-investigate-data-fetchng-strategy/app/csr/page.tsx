/**
 * This page renders page by CSR.
 * On Next.js App Router, CSR is used for client components that are set as SSR false.
 */

import CsrBlock from "@/components/CsrBlock";

export default function CsrTest() {
  return (
    <CsrBlock />
  );
}
