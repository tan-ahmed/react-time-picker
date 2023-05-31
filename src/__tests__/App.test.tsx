import { act, render, screen, waitFor } from "@testing-library/react";
import App from "../App";

// This is more of an integration test combining the TimePicker and TimeSelector components

describe("Interact with Time selector by opening and closing it", () => {
  test("Opens the time selector", async () => {
    render(<App />);

    // find Time icon and click it to open time selector
    const inputIcon = screen.getByTestId("input-icon");
    expect(inputIcon).toBeInTheDocument();
    act(() => {
      inputIcon.click();
    });

    // Verify time selector modal is open
    const timeSelectorModal = await waitFor(() => screen.findByTestId("modal"));

    // Set time to 03:03 am
    const btn03 = screen.getAllByText(/03/i);
    act(() => {
      btn03[0].click();
      btn03[1].click();
    });

    // Set time period to am
    const btnAm = screen.getByRole("button", { name: /am/i });
    expect(btnAm).toBeInTheDocument();
    act(() => {
      btnAm.click();
    });

    // Click "save" button
    const btnSave = screen.getByLabelText(/save/i);
    expect(btnSave).toBeInTheDocument();
    act(() => {
      btnSave.click();
    });

    // Verify time selector is closed
    expect(timeSelectorModal).not.toBeInTheDocument();

    // Verify time in Input is set to 03:03 am
    const timeInput = screen.getByPlaceholderText(/select time/i);
    expect(timeInput).toHaveValue("03:03");
  });
});
