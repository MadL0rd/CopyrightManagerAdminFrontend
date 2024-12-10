import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";
import { userPermissions } from "../../interfaces/userPermissions.interface";

export const UserEdit: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("users.fields.id")}
          name={["id"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input readOnly disabled />
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
    </Edit>
  );
};
