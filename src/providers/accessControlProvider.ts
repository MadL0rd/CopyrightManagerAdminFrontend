import { newEnforcer } from "casbin";
import { CanParams, CanReturnType } from "@refinedev/core";
import { adapter, model } from "../casbin/accessControl";
import { authProvider } from "./authProvider";

export const accessControlProvider = {
  can: async ({ resource, action }: CanParams): Promise<CanReturnType> => {

    // TODO: Permissions is here
    const role = await authProvider.getPermissions?.();

    const enforcer = await newEnforcer(model, adapter);
    const can = await enforcer.enforce(role, resource, action);
    return { can: true };

    return Promise.resolve({
      can,
    });
  },
};
