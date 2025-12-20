import httpClient from "../utility/http";

class GroupService {
  async fetchGroups() {
    return await httpClient
      .get("v1/groups")
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  async fetchGroupExpense(groupId: string) {
    return await httpClient
      .get(`v1/groups/${groupId}/expenses`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
  async fetchGroup(groupId: string) {
    return await httpClient
      .get(`v1/groups/${groupId}`)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}

const groupServiceInstance = new GroupService();

export default groupServiceInstance;
