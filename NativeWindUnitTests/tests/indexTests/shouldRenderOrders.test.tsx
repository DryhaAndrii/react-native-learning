import Index from "@/app/index";
import { render, waitFor } from "@testing-library/react-native";
import { mockAxiosGet } from "../helpers/axios";
import { fakeOrders } from "../helpers/fakeOrders";

jest.mock("axios");

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

it("Should render orders", async () => {
  mockAxiosGet(fakeOrders);

  const { getByText } = render(<Index />);

  await waitFor(
    () => {
      expect(getByText("testTitle1") && getByText("testTitle2")).toBeTruthy();
    },
    { timeout: 3000 }
  );
});
