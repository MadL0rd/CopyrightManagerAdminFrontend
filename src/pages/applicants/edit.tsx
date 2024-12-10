import React from "react";
import { IResourceComponentsProps, useTranslate } from "@refinedev/core";
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, DatePicker, Select } from "antd";
import dayjs from "dayjs";
import { genders } from "../../interfaces/userPermissions.interface";

export const ApplicantEdit: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { formProps, saveButtonProps, queryResult } = useForm();

  const applicantsData = queryResult?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={translate("applicants.fields.id")}
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
    </Edit>
  );
};
