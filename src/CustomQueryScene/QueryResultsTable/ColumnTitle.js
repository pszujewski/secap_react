export default class ColumnTitle {
  constructor(recordKey) {
    this.key = recordKey;
  }

  getTitle() {
    const keysToTitles = this.getRecordKeysToColumnTitles();
    for (let k in keysToTitles) {
      if (this.isMatch(k)) {
        return keysToTitles[k];
      }
    }
  }

  isMatch(recordKey) {
    return this.key.indexOf(recordKey) > -1;
  }

  getRecordKeysToColumnTitles() {
    const courses = this.coursesRecordKeysToColumnTitle();
    const rooms = this.roomsRecordKeysToColumnTitle();
    return { ...courses, ...rooms };
  }

  coursesRecordKeysToColumnTitle() {
    return {
      uuid: "UUID",
      avg: "Average",
      dept: "Department",
      pass: "Pass",
      fail: "Fail",
      audit: "Audit",
      id: "ID",
      instructor: "Instructor",
      title: "Title",
      year: "Year",
    };
  }

  roomsRecordKeysToColumnTitle() {
    return {
      lat: "Latitude",
      lon: "Longitude",
      seats: "Seats",
      fullname: "Full Name",
      shortname: "Short Name",
      number: "Number",
      name: "Name",
      address: "Address",
      type: "Type",
      furniture: "Furniture",
      href: "Link",
    };
  }
}
