import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import SigninPage from "./SinginPage";
import { Provider } from "next-auth/client";
import "@testing-library/jest-dom";
import Router from "next/router";
jest.mock("next/router", () => ({ push: jest.fn() }));

describe("Omega", () => {
  it("Works", async () => {
    render(
      <Provider
        session={{
          expires: "1",
          data: { status: authenticated},
        }}
      >
        <SigninPage />
      </Provider>
    );

    await waitFor(() => expect(Router.push).toHaveBeenCalledWith("/members"));
  });
});
