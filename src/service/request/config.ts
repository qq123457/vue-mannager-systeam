let BASE_URL = "";
let BASE_NAME = "";

if (process.env.NODE_ENV === "development") {
  BASE_URL = "https://acwink.org/dev";
  BASE_NAME = "acwink";
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://acwink.org/prod";
  BASE_NAME = "kobe";
} else {
  BASE_URL = "https://acwink.org/test";
  BASE_NAME = "james";
}

export { BASE_NAME, BASE_URL };
