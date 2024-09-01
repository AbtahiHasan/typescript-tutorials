type UserRole = "user" | "admin" | "super-admin";

const userRole: UserRole = "admin";

type Identity = { id: string; name: string };
type PersonalInfo = { email: string; country: string };

type Employee = Identity & PersonalInfo & { role: UserRole };

const employee: Employee = {
  id: "1",
  email: "email@gmail.com",
  name: "John",
  country: "bangladesh",
  role: "admin",
};
