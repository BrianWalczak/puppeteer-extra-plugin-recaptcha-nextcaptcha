export interface NextCaptchaOptions {
	pollingInterval: number;
	retries: number;
}

export interface NextCaptchaApiBaseResult {
	errorID: number;
	errorCode: string;
}

export interface NextCaptchaApiCreateTaskResult extends NextCaptchaApiBaseResult {
	taskId: number;
}

export interface NextCaptchaApiGetTaskResultResult extends NextCaptchaApiBaseResult {
	status: "pending" | "processing" | "ready";
	solution?: { gRecaptchaResponse: string };
}

export interface NextCaptchaApiBalanceResult extends NextCaptchaApiBaseResult {
	balance: number;
}
