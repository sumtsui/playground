import { render, screen, waitFor } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import Dog from "./dog";
import * as apis from "../utils/apis";
import * as math from "../utils/math";

it("fetches a dog when 'get dog' button is clicked", async () => {
  // jest.mock("../utils/apis"); // why this is not working?????
  jest.mock("../utils/math");

  // math.add = jest.fn();
  // apis.getDog = jest.fn(); // this works, but in your code you need it to return Promise, so need to mockImplementation

  jest // why this can't be placed outside of it?????
    .spyOn(apis, "getDog")
    .mockImplementation(() => Promise.resolve({ message: "" }));

  render(<Dog />);
  const button = screen.getByRole("button", {
    name: "New Dog!",
  });
  fireEvent.click(button);

  await waitFor(() => expect(apis.getDog).toHaveBeenCalled());
  expect(math.add).toHaveBeenCalled();
});
