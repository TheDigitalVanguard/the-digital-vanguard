import { render, screen } from "@testing-library/react";
import { AddDetailModal } from "./AddDetailModal";
describe("Article Item Page", () => {
  test("renders Article Item with correct text", () => {
    render(<AddDetailModal sortValue={1} />);
    const textElement = screen.getByTestId("add-detail-modal");
    expect(textElement).toBeInTheDocument();
  });
});
