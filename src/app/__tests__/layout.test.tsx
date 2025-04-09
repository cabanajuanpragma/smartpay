import { render } from "@testing-library/react";
import RootLayout, { metadata } from "../layout";

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(getByText("Test Child")).toBeDefined();
  })

  it("sets the correct metadata", () => {
    expect(metadata.title).toBe("Smart Pay");
    expect(metadata.description).toBe("Aplicación para gestionar pagos de Asulado");
  });

  it("renders the HTML structure correctly", () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    const htmlElement = container.querySelector("html");
    const bodyElement = container.querySelector("body");

    expect(htmlElement).toBeDefined();
    expect(bodyElement).toBeDefined();
  });
});