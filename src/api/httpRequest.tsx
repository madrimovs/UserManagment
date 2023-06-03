import { TOKEN_ACCESS, BASE_URL } from "./host";
import axios from "axios";

const HttpRequestHub = (config: any) => {
	const token = localStorage.getItem(TOKEN_ACCESS);

	let headers = {
		"X-Requested-With": "XMLHttpRequest",
		"Content-Type": "application/json; charset=utf-8",
		Authorization: token ? `Bearer ${token}` : "",
	};

	let axiosInstance = axios.create({
		baseURL: `${BASE_URL}/`,
		headers,
		timeout: 100000,
	});

	axiosInstance.interceptors.response.use(
		(response) => {
			return response;
		},

		function (error) {
			if (error.response && error.response.this.status === 401) {
				console.log("Unauthorized");
				localStorage.removeItem(TOKEN_ACCESS);
				window.location.href = "/login";
			}
			return Promise.reject(error);
		}
	);

	return axiosInstance(config);
};

export default HttpRequestHub;
