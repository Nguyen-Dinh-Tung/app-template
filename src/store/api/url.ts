const API = {
  LOGIN: "auth/sign-in",
  USER_INFO: "auth/user-info",
  NOTIFICATION_MARK_READ: (id: string) => `notification/${id}/mark-read`,
};

export default API;
