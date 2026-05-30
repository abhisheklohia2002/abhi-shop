
import api, { orderApi, productApi } from "./client";
const AUTH_SERVICE = "/api/auth"
const ORDER_SERVICE = "/order"
import { v4 as uuidv4 } from "uuid"
export const login = async (credentials:any) => {
  return await api.post(`/auth/login`, credentials);
};

export const register = async (credentials:any) => {
  return await api.post(`/auth/create`, credentials);
};

export const self = async () => {
  return await api.get(`/auth/self`);
};

export const logout = async () => {
  return await api.post(`${AUTH_SERVICE}/auth/logout`);
};

export const showUsers = async (query: string) => {
  return await api.get(`${AUTH_SERVICE}/user?${query}`);
};

export const allTenant = async (query?: string) => {
  if (query) {
    return await api.get(`${AUTH_SERVICE}/tenant?${query}`);
  }
  return await api.get(`${AUTH_SERVICE}/tenant`);
};

export const createUser = async (data:any) => {
  return await api.post(`${AUTH_SERVICE}/user`, data);
};

export const updateUser = async (data:any) => {
  return await api.put(`${AUTH_SERVICE}/user/${data.id}`, data);
};
export const createTenants = async (data:any) => {
  return await api.post(`${AUTH_SERVICE}/tenant`, data);
};

export const getCategories = async()=>{
  return await productApi.get(`/category/`)
}

export const getProductById = async(id: number) => {
  return await productApi.get(`/product/${id}`);
};

export const getProduct = async (categoryId?: string | number) => {
  const res = await productApi.get("/product/", {
    params: categoryId ? { categoryId } : {},
  });

  return res.data;
};

export const createOrder = async (payload: any) => {
  const idempotencyKey = `order-${uuidv4()}`;

  const res = await orderApi.post("/order/", payload, {
    headers: {
      "Idempotency-Key": idempotencyKey,
    },
  });

  return res.data;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createProduct = async(data:FormData) => {
  return await productApi.post(`/product`,data,
    {
       headers: {
      "Content-Type": undefined, 
    },
    }
  );
};

export const couponLists = async()=>{
  return await productApi.get(`${ORDER_SERVICE}/`)
}