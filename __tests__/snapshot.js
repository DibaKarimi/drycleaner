import { render } from "@testing-library/react";
import Layout from "../components/layout/Layout";

it("renders Layout unchanged", () => {
  const { container } = render(<Layout />);
  expect(container).toMatchSnapshot();
});
