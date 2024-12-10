import React from "react";
import {
  IResourceComponentsProps,
  useShow,
  useTranslate,
} from "@refinedev/core";
import { Show, TagField, TextField, DateField } from "@refinedev/antd";
import { Typography } from "antd";

const { Title } = Typography;

export const ApplicantShow: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { queryResult } = useShow();
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{translate("applicants.fields.id")}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{translate("applicants.fields.fullName")}</Title>
      <TextField value={record?.fullName} />
      <Title level={5}>{translate("applicants.fields.gender")}</Title>
      <TextField value={record?.gender} />
      <Title level={5}>{translate("applicants.fields.birthDate")}</Title>
      <DateField value={record?.birthDate} />
      <Title level={5}>{translate("applicants.fields.phoneNumber")}</Title>
      <TextField value={record?.phoneNumber} />
      <Title level={5}>{translate("applicants.fields.createdAt")}</Title>
      <DateField value={record?.createdAt} />
      <Title level={5}>{translate("applicants.fields.updatedAt")}</Title>
      <DateField value={record?.updatedAt} />
    </Show>
  );
};
