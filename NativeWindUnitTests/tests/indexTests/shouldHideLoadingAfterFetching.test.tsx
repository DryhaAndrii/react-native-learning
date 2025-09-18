import Index from "@/app/index";
import { render, waitFor } from "@testing-library/react-native";
import { fakeOrders } from "../helpers/fakeOrders";

import { mockAxiosGet } from "../helpers/axios";

jest.mock("axios");

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

it("Should hide loading after fetching", async () => {
  mockAxiosGet(fakeOrders);

  const { getByText, queryByTestId } = render(<Index />);

  await waitFor(
    () => {
      expect(queryByTestId("loading")).toBeNull();
      expect(getByText("testTitle1")).toBeTruthy();
    },
    { timeout: 4000 }
  );
});
