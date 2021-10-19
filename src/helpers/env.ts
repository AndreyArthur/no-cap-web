type RawEnvironmentVariables = {
  VITE_API_URL: string;
};

const variables = (import.meta as unknown as Record<string, unknown>)
  .env as RawEnvironmentVariables;

export const env = {
  API_URL: variables.VITE_API_URL,
};
