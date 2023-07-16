import { render, screen } from "../../../test-utils/test-library-utils";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

test("Checkbox is unchecked by default", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and condition/i,
  });
  expect(checkbox).not.toBeChecked();

  const confirmButton = screen.getByRole("button", { name: /confirm order/i });
  expect(confirmButton).toBeDisabled();
});

test("Checking checkbox enalbes button on first click and disables button on second click", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /terms and condition/i,
  });
  const confirmButton = screen.getByRole("button", { name: /confirm order/i });

  //Checking checkbox to enable button
  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  //Checking checkbox to disable button
  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("Popover responds to hover", async () => {
  render(<SummaryForm />);

  //popover stats out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  const termsAndConditions = screen.getByText(/terms and condition/i);

  //popover appears on mouseover of checkbox label
  await userEvent.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);

  expect(popover).toBeInTheDocument();

  //popover disapears when we mouse out
  await userEvent.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});

//***** screen Query Methods *****
//command[All]ByQueryType
//command
//- get: expect element to be in DOM
//- query: expect element not to be in DOM
//- find: expect element to appear async

//[All]
//(exclude) expect only one match
//(include) expect more than one match

//QueryType
// - Role (most preferred)
// - AltText (images)
// - Text (display elements)
// - Form elements
//     - PlaceholderText
//     - LabelText
//     - DisplayValue
