import React from "react";
import { render, waitFor } from "@testing-library/react";
import SigninPage from "./SinginPage";
import { SessionProvider } from "next-auth/react";
import Router from "next/router";
import { useRouter } from "next/router";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));
describe("SigninPage", () => {
  it("Works", async () => {
    render(
      <SessionProvider
        session={{
          expires: "1",
          data: { status: "authenticated" },
        }}
      >
        <SigninPage />
      </SessionProvider>
    );

    await waitFor(() => expect(Router.push).toHaveBeenCalledWith("/services"));
  });
});

