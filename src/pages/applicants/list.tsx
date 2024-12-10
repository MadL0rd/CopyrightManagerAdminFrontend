import React from "react";
import {
  IResourceComponentsProps,
  BaseRecord,
  useTranslate,
} from "@refinedev/core";
import {
  useTable,
  List,
  EditButton,
  ShowButton,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";

export const ApplicantList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="id"
          title={translate("applicants.fields.id")}
        />

        <Table.Column
          dataIndex="fullName"
          title={translate("applicants.fields.fullName")}
        />
        <Table.Column
          dataIndex="gender"
          title={translate("applicants.fields.gender")}
        />
        <Table.Column
          dataIndex={["birthDate"]}
          title={translate("applicants.fields.birthDate")}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          dataIndex="phoneNumber"
          title={translate("applicants.fields.phoneNumber")}
        />
        <Table.Column
          dataIndex={["createdAt"]}
          title={translate("applicants.fields.createdAt")}
          render={(value: any) => <DateField value={value} />}
        />
        <Table.Column
          dataIndex={["updatedAt"]}
          title={translate("applicants.fields.updatedAt")}
          render={(value: any) => <DateField value={value} />}
        />

        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
