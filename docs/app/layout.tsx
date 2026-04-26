import type { ReactNode } from "react";
import { Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "../styles/globals.css";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    template: "%s – UI Variants",
    default: "UI Variants",
  },
  description:
    "Every component in every style — Neobrutalism, Shadcn-inspired, and Flowbite-inspired. Browse, preview, and copy.",
};

const navbar = (
  <Navbar
    logo={
      <span style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "-0.02em" }}>
        UI Variants
      </span>
    }
    projectLink="https://github.com/shubhamb23efd/component-library"
  />
);

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shubhamb23efd/component-library/tree/main/docs"
          footer={
            <p style={{ textAlign: "center", fontSize: "0.85rem", opacity: 0.6 }}>
              © {new Date().getFullYear()} UI Variants. Built with Nextra.
            </p>
          }
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          darkMode
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
