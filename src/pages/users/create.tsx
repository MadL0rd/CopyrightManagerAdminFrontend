import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { userPermissions } from "../../interfaces/userPermissions.interface";

export const UserCreate: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("users.fields.email")}
          name={["email"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={translate("users.fields.password")}
          name={["password"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type={"password"} />
        </Form.Item>
        <Form.Item
          label={translate("users.fields.firstName")}
          name={["firstName"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={translate("users.fields.lastName")}
          name={["lastName"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={translate("users.fields.permissions")}
          name={["permissions"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select
            mode="multiple"
            options={userPermissions.map((permission) => ({
              value: permission.id,
              label: permission.name,
            }))}
            placeholder=""
          />
        </Form.Item>
      </Form>
    </Create>
  );
};
