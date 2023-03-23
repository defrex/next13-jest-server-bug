import { getLayoutData } from "./layout";

describe("Layout getData", () => {
  it("should return data", async () => {
    const data = await getLayoutData();
    expect(data.isData).toBeTruthy();
  });
});
