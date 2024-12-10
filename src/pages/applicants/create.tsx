import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker } from "antd";
import dayjs from "dayjs";
import { genders } from "../../interfaces/userPermissions.interface";
import { Select } from "antd/lib";

export const ApplicantCreate: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps, queryResult } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("applicants.fields.fullName")}
          name={["fullName"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={translate("applicants.fields.gender")}
          name={["gender"]}
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Select
            options={genders.map((gender) => ({
              value: gender,
              label: gender,
            }))}
            placeholder=""
          />
        </Form.Item>

        <Form.Item
          label={translate("applicants.fields.birthDate")}
          name={["birthDate"]}
          rules={[
            {
              required: true,
            },
          ]}
          getValueProps={(value) => ({
            value: value ? dayjs(value) : undefined,
          })}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          label={translate("applicants.fields.phoneNumber")}
          name={["phoneNumber"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Create>
  );
};
