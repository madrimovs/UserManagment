import HttpRequestHub from "../httpRequestHub";

export const getUserMe = () => {
	const config = {
		method: "GET",
		url: `userme/`,
	};

	return HttpRequestHub(config);
};

export const getUserApi = () => {
	const config = {
		method: "GET",
		url: `users/`,
	};
	return HttpRequestHub(config);
};

export const updateUserStatus = (id: number | string, status: number) => {
	const config = {
		method: "PUT",
		url: `users/${id}`,
		data: {
			status,
		},
	};

	return HttpRequestHub(config);
};

export const deleteUserApi = (id: number | string) => {
	const config = {
		method: "DELETE",
		url: `users/${id}`,
	};

	return HttpRequestHub(config);
};
