class LocalStorageService {
  setAccessToken(token: string) {
    localStorage.setItem('ec_access_token', token);
  }
  getAccessToken() {
    return localStorage.getItem('ec_access_token');
  }
  clearStorage() {
    localStorage.clear();
  }
  setData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  getData(key: string) {
    return localStorage.getItem(key);
  }
}

export default new LocalStorageService();
