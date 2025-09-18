import axios from "axios";

export const mockAxiosGet = (response: any) => {
  (axios.get as jest.Mock).mockResolvedValue({ data: response });
};
