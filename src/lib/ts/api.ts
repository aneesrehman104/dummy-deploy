import axios, { AxiosHeaders } from "axios";
import { AxiosInstance } from "axios";
import { getCookie } from "cookies-next";

const backEndURLWithAuth: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Authorization: `Bearer ${getCookie("accessToken")}`,
  },
  withCredentials: true,
});

const backEndURLWithoutAuth = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  withCredentials: true,
});

export const postApiWithoutAuth = async (url: string, body: object) => {
  try {
    const result = await backEndURLWithoutAuth.post(url, body);
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

export const postApiWithAuth = async (url: string, body: any) => {
  backEndURLWithAuth.interceptors.request.use((config) => {
    return config;
  });
  try {
    const result = await backEndURLWithAuth.post(url, body, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getApiWithAuth = async (url: string) => {
  try {
    const result = await axios.get(url, {
      withCredentials: true,
      baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return result;
  } catch (error: any) {
    return error.response.data;
  }
};

export const getApiWithoutAuth = async (
  url: string,
  params?: Record<string, any>
) => {
  try {
    const result = await backEndURLWithoutAuth.get(url, { params });
    return {
      status: result.status,
      data: result.data.source,
    };
  } catch (error: any) {
    return error;
  }
};

export const putApiWithAuth = async (url: string, body: object) => {
  backEndURLWithAuth.interceptors.request.use((config) => {
    return config;
  });
  try {
    const result = await backEndURLWithAuth.put(url, body);
    return result;
  } catch (error: any) {
    return error;
  }
};

export const putApiWithoutAuth = async (url: string, body: object) => {
  try {
    const result = backEndURLWithoutAuth.put(url, body);
    return result;
  } catch (error: any) {
    return error.message;
  }
};

export const deleteApiWithAuth = async (url: string) => {
  backEndURLWithAuth.interceptors.request.use((config) => {
    return config;
  });
  try {
    const result = await backEndURLWithAuth.delete(url);
    return result;
  } catch (error: any) {
    return error;
  }
};
