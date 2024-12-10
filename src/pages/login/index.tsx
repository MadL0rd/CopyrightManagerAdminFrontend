import AppLogo from "../../components/AppLogo";
import { LoginPage } from "./login";

export const Login = () => {
  return (
    <LoginPage
      title={<AppLogo />}
      formProps={{
        initialValues:
          process.env.NODE_ENV === "development"
            ? { email: "admin@example.com", password: "secret" }
            : undefined,
      }}
    />
  );
};
