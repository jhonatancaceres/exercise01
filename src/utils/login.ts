export const login = async ({ email, password }: { email: string, password: string }) => {
  const delay = (0.7 + Math.random() * 2) * 1000;
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (password === "password123" && !!email) {
        resolve(null);
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, delay);
  });
}