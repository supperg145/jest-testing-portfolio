const fetchData = require("../src/fetchData");
const axios = require("axios");

jest.mock("axios");

describe("Fetch data", () => {
  test("should fetch data", async () => {
    const data = { data: "Hello" };
    axios.get.mockResolvedValue(data);
    const response = await fetchData();
    expect(response).toEqual(data);
  });

  test("should throw an error", async () => {
    axios.get.mockRejectedValue(new Error("Error"));
    await expect(fetchData()).rejects.toThrow("Error");
  });

});
