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

export const backEndURLWithoutAuth = axios.create({
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

export const getGetApiWithParams = async (url: string, params: object) => {
  try {
    const result = await backEndURLWithAuth.get(url, {
      params,
    });
    return {
      status: result.status,
      data: result.data.source,
    };
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

const toODataQuery = (params: ODataParams): string => {
  let odataParamsArr: any[] = [];
  console.log(params, "params");
  if (params.top !== undefined) odataParamsArr.push(`$top=${params.top}`);
  if (params.skip !== undefined) odataParamsArr.push(`$skip=${params.skip}`);
  if (params.filter !== undefined)
    odataParamsArr.push(`filter=${encodeURIComponent(params.filter)}`);
  if (params.select !== undefined)
    odataParamsArr.push(`select=${params.select.join(",")}`);
  if (params.orderby !== undefined) {
    const orderby = params.orderby
      .map((o) => `${o.field} ${o.direction || "asc"}`.trim())
      .join(",");
    odataParamsArr.push(`$orderby=${orderby}`);
  }
  if (params.count !== undefined) odataParamsArr.push(`$count=${params.count}`);
  if (params.expand !== undefined)
    odataParamsArr.push(`$expand=${params.expand.join(",")}`);
  if (params.search !== undefined)
    odataParamsArr.push(`search=${encodeURIComponent(params.search)}`);
  console.log(odataParamsArr, "odataParamsArr");
  return odataParamsArr.join("&");
};

/* odata operation */
export const getODataWithParams = async (url: string, params: ODataParams) => {
  try {
    // Convert the params object to OData format
    const odataParams = toODataQuery(params);
    const fullUrl = `${url}?${odataParams}`;
    console.log(fullUrl, "fullUrl");
    const result = await backEndURLWithAuth.get(fullUrl);
    
    return {
      status: result.status,
      data: result.data,
    };
  } catch (error: any) {
    return error;
  }
};

type ODataParams = {
  top?: number;
  skip?: number;
  filter?: string;
  select?: string[];
  orderby?: { field: string; direction?: "asc" | "desc" }[]; // Updated type
  count?: boolean;
  expand?: string[];
  search?: string;
  cancelToken?:any;
};

// Sample call
// const response = await getODataWithParams("yourOdataEndpoint", {
//   top: 10,
//   filter: "exchange eq 'NASDAQ'",
//   select: ['id', 'name'],
//   orderby: [{ field: 'name', direction: 'desc' }]
// });
