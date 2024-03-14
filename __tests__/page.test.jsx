import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../components/layout/Layout";
import { SessionProvider } from "next-auth/react";

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <SessionProvider
        session={{
          expires: "1",
          data: { status: "authenticated" },
        }}
      >
        <Layout />
      </SessionProvider>
    );
    expect(screen.getByText("Log out"));
    
  });
});
