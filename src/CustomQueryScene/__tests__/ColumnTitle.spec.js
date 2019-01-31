import ColumnTitle from "../QueryResultsTable/ColumnTitle";

const getColumnTitle = recordKey => {
  const columnTitle = new ColumnTitle(recordKey);
  return columnTitle.getTitle();
};

describe("ColumnTitle", () => {
  it("Should identify a courses key and convert to correct Title", () => {
    expect(getColumnTitle("courses_id")).toBe("ID");
    expect(getColumnTitle("courses_uuid")).toBe("UUID");
    expect(getColumnTitle("courses_title")).toBe("Title");
    expect(getColumnTitle("ubc_instructor")).toBe("Instructor");
    expect(getColumnTitle("courses_pass")).toBe("Pass");
    expect(getColumnTitle("courses_fail")).toBe("Fail");
    expect(getColumnTitle("peter_avg")).toBe("Average");
  });

  it("Should identify a rooms key and convert to correct Title", () => {
    expect(getColumnTitle("rooms_seats")).toBe("Seats");
    expect(getColumnTitle("rooms_number")).toBe("Number");
    expect(getColumnTitle("rooms_address")).toBe("Address");
    expect(getColumnTitle("rooms_href")).toBe("Link");
  });
});
