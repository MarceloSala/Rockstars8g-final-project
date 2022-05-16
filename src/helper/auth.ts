const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJlbWFpbCI6ImhlY3Rvci5zYWxhQGVucm91dGVzeXN0ZW1zLmNvbSIsInJvbCI6ImFkbWluIiwiaWF0IjoxNjUwNjUyOTQwLCJleHAiOjE2NTA2NjM3NDB9.Rcx4uXoEEU4zbCoEoUinOZqepz_7HUlagp1i5IpGcuE";

export const fetchAuth = (input: RequestInfo, init?: RequestInit) =>
  fetch(input, {
    ...init,
    headers: {
      ...init?.headers,
      Authorization: `Bearer ${token}`,
    },
  });