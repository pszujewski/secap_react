export default class ApiFetcher {
  // Public method
  call(endpoint, method, body) {
    const url = this._getRequestUrl(endpoint);
    const options = this._getFetchOptions(method, body);
    return this._fetchFromApi(url, options);
  }

  // Private methods

  async _fetchFromApi(url, options) {
    let json;
    try {
      const response = await fetch(url, options);
      json = await response.json();

      if (json.code > 204) {
        throw json;
      }
    } catch (err) {
      throw err;
    }
    return json;
  }

  _getFetchOptions(method, body) {
    let options = { method, headers: { Accept: "application/json" } };
    if (body) {
      options = Object.assign({}, options, { body });
    }
    return options;
  }

  _getServerDomain() {
    return "http://localhost:4321";
  }

  _getRequestUrl(endpoint) {
    return `${this._getServerDomain()}${endpoint.trim()}`;
  }
}
