export interface ApiResponse<T> {
  data: T;
  messageKey: string;
  correlationId: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface HealthResponse {
  status: string;
}

export interface ApiErrorResponse {
  messageKey: string;
  correlationId: string;
  errors?: Record<string, string[]>;
}
