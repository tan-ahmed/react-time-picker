import { render, screen, waitFor } from "@testing-library/react";
import Modal from "../components/Modal/Modal";

describe("Validate HTML elements in Modal component", () => {
  test("render modal dialog", async () => {
    const handleClose = () => {
      console.log("close");
    };
    render(
      <Modal children={<h2>helloworld</h2>} open={true} onClose={handleClose} />
    );
    // Check modal is rendered
    const theModal = await waitFor(() => screen.findByTestId("modal"));
    expect(theModal).toBeInTheDocument();
    // confirm children are rendered
    expect(theModal).toHaveTextContent(/helloworld/i);
    // Check Close button is on modal
    const closeBtn = screen.getByLabelText(/close screen/i);
    expect(closeBtn).toBeInTheDocument();
  });
});
