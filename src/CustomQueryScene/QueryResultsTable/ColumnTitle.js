/**
 * Given the key name on a record, retrieves the appropriate Column Title
 */

export default class ColumnTitle {
  constructor(recordKey) {
    this.key = recordKey;
    this.keysToColumnTitles = this._getRecordKeysToColumnTitles();
  }

  getTitle() {
    for (let k in this.keysToColumnTitles) {
      if (this._isMatch(k)) {
        return this.keysToColumnTitles[k];
      }
    }
  }

  _isMatch(recordKey) {
    return this.key.indexOf(recordKey) > -1;
  }

  _getRecordKeysToColumnTitles() {
    const courses = this._coursesRecordKeysToColumnTitle();
    const rooms = this._roomsRecordKeysToColumnTitle();
    return { ...courses, ...rooms };
  }

  _coursesRecordKeysToColumnTitle() {
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

  _roomsRecordKeysToColumnTitle() {
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
