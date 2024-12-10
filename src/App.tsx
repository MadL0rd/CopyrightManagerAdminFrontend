import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import { Authenticated, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
  ErrorComponent,
  notificationProvider,
  ThemedLayoutV2,
  ThemedSiderV2,
  ThemedTitleV2,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { authProvider } from "./providers/authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { UserCreate, UserEdit, UserList, UserShow } from "./pages/users";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { accessControlProvider } from "./providers/accessControlProvider";
import { ConfirmEmailPage } from "./pages/confirmEmail/confirmEmail";
import { UserOutlined } from "@ant-design/icons";
import nestjsxCrudDataProviderCustom from "./providers/nestjsx-crud";
import { UpdatePasswordPage } from "./pages/updatePassword/updatePassword";
import HeaderLogo from "./components/HeaderLogo";
import { API_URL } from "./constants";
import {
  ApplicantList,
  ApplicantCreate,
  ApplicantEdit,
  ApplicantShow,
} from "./pages/applicants";

function App() {
  const { t, i18n } = useTranslation();

  const dataProvider = nestjsxCrudDataProviderCustom(API_URL);

  const i18nProvider = {
    translate: (key: string, params: object) => t(key, params),
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
  };

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              notificationProvider={notificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              accessControlProvider={accessControlProvider}
              i18nProvider={i18nProvider}
              resources={[
                {
                  name: "users",
                  list: "/users",
                  create: "/users/create",
                  edit: "/users/edit/:id",
                  show: "/users/show/:id",
                  meta: {
                    canDelete: true,
                    icon: (
                      <UserOutlined
                        style={{ fontSize: "16px", color: "#08c" }}
                      />
                    ),
                  },
                },
                {
                  name: "applicants",
                  list: "/applicants",
                  create: "/applicants/create",
                  edit: "/applicants/edit/:id",
                  show: "/applicants/show/:id",
                },
              ]}
              options={{
                disableTelemetry: true,
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                projectId: "p6ZQJl-Hr6WQh-fJQsQO",
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key="my-routes"
                      fallback={<CatchAllNavigate to="/login" />}
                    >
                      <ThemedLayoutV2
                        Title={({ collapsed }) => (
                          <ThemedTitleV2
                            // collapsed is a boolean value that indicates whether the <Sidebar> is collapsed or not
                            collapsed={collapsed}
                            // Adjust to different logo when collapsed, if needed
                            icon={collapsed ? <HeaderLogo /> : <HeaderLogo />}
                            text="Сopyright Manager" // App title if needed
                          />
                        )}
                        Header={() => <Header sticky />}
                        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
                      >
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={<NavigateToResource resource="articles" />}
                  />
                  <Route path="/users">
                    <Route index element={<UserList />} />
                    <Route path="create" element={<UserCreate />} />
                    <Route path="edit/:id" element={<UserEdit />} />
                    <Route path="show/:id" element={<UserShow />} />
                  </Route>
                  <Route path="/applicants">
                    <Route index element={<ApplicantList />} />
                    <Route path="create" element={<ApplicantCreate />} />
                    <Route path="edit/:id" element={<ApplicantEdit />} />
                    <Route path="show/:id" element={<ApplicantShow />} />
                  </Route>
                  <Route path="*" element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated key="my-routes" fallback={<Outlet />}>
                      <NavigateToResource />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route
                    path="/password-change/:id"
                    element={<UpdatePasswordPage />}
                  />
                  <Route
                    path="/confirm-email/:id"
                    element={<ConfirmEmailPage />}
                  />
                </Route>
              </Routes>

              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
