import Index from "@/app/index";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import { mockAxiosGet } from "../helpers/axios";
import { fakeOrders } from "../helpers/fakeOrders";

jest.mock("axios");

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

it("Should push to order detail on click", async () => {
  mockAxiosGet(fakeOrders);

  const routerMock = jest.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: routerMock,
  });

  const { getByText } = render(<Index />);

  const title = await waitFor(() => getByText("testTitle2"), {
    timeout: 3000,
  });

  fireEvent.press(title);

  expect(routerMock).toHaveBeenCalledWith({
    pathname: "/orders/[id]",
    params: { id: 223 },
  });
});
