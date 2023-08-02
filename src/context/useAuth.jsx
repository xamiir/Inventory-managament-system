export default function useAuth() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (!token || !user) {
    return { token: null, user: null };
  }
  return { token, user };
}
