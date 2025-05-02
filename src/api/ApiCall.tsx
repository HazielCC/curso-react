import axios from "axios";

interface ApiError extends Error {
    status?: number;
    response?: any;
}

type HttpMethod = "get" | "post" | "put" | "delete" | "patch";

export async function ApiCall(
    url: string,
    method: HttpMethod = "get",
    body?: any,
    headers?: Record<string, string>
) {
    try {
        const response = await axios.request({
            url,
            method,
            data: body ?? undefined,
            headers: headers || undefined,
            validateStatus: (status) => {
                return status >= 200 && status < 300;
            },
        });

        return response.data;
    } catch (error) {
        const apiError: ApiError = new Error('Error en la llamada API');
        if (axios.isAxiosError(error)) {
            apiError.status = error.response?.status;
            apiError.response = error.response?.data;
        }
        return Promise.reject(apiError);

    }
}