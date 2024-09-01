type TUser = {
  name: string;
  bio?: string;
  role: "admin";
  isVerified: boolean;
};

type MyType = null;

const user1: TUser = {
  name: "John deo",
  role: "admin",
  isVerified: true,
};

const user2: TUser = {
  name: "John deo",
  role: "admin",
  isVerified: true,
};

user1.isVerified;
