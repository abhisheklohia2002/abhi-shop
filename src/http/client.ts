import axios from "axios";
const createApiInstance = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  
  
  api.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
      delete config.headers?.["Content-Type"];
    } else {
      config.headers = config.headers ?? {};
      config.headers["Content-Type"] = "application/json";
    }
    return config;
  });
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
  
      if (
        error.response?.status === 401 &&
        !originalRequest._isRetry &&
        !originalRequest.url?.includes("/auth/refreshToken")
      ) {
        originalRequest._isRetry = true;
  
        try {
          console.log("Refreshing token...");
          await api.post(
            `${import.meta.env.VITE_BACKEND_API_URL}/auth/refreshToken`,
          );
          return api.request(originalRequest);
        } catch (refreshError) {
          // useAuthStore.getState().logout();
          return Promise.reject(refreshError);
        }
      }
  
      return Promise.reject(error);
    },
  );

  return api
}
const api = createApiInstance(import.meta.env.VITE_BACKEND_API_URL ?? "");
export const productApi = createApiInstance(import.meta.env.VITE_PRODUCT_SERVICE ?? "");
export const orderApi = createApiInstance(import.meta.env.VITE_ORDER_SERVICE ?? "");

export default api;
