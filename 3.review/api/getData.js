export const API_END_POINT = "data.json";

const request = async (url) => {
  const res = await fetch(url);

  if (res.ok) {
    const json = res.json();
    return json;
  }

  throw new Error("API 호출 실패");
};

export default async (index) => {
  const result = await request(`${API_END_POINT}`);

  return result[index];
};
