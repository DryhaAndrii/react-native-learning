import Index from "@/app/index";
import { render } from "@testing-library/react-native";
import { mockAxiosGet } from "../helpers/axios";
import { fakeOrders } from "../helpers/fakeOrders";

jest.mock("axios");

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

it("Should show loading", async () => {
  mockAxiosGet(fakeOrders);

  const { getByTestId } = render(<Index />);
  expect(getByTestId("loading")).toBeTruthy();
});
