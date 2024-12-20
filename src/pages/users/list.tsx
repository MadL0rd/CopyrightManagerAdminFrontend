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
  DeleteButton,
  TagField,
  EmailField,
  DateField,
} from "@refinedev/antd";
import { Table, Space } from "antd";
import { userPermissions } from "../../interfaces/userPermissions.interface";

export const UserList: React.FC<IResourceComponentsProps> = () => {
  const translate = useTranslate();
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={translate("users.fields.id")} />
        <Table.Column
          dataIndex={["email"]}
          title={translate("users.fields.email")}
          render={(value: any) => <EmailField value={value} />}
        />
        <Table.Column
          dataIndex="firstName"
          title={translate("users.fields.firstName")}
        />
        <Table.Column
          dataIndex="lastName"
          title={translate("users.fields.lastName")}
        />
        <Table.Column
          dataIndex={["createdAt"]}
          title={translate("users.fields.createdAt")}
          render={(value: any) => (
            <DateField value={value} format={"DD.MM.YYYY"} />
          )}
        />
        <Table.Column
          dataIndex={["updatedAt"]}
          title={translate("users.fields.updatedAt")}
          render={(value: any) => (
            <DateField value={value} format={"DD.MM.YYYY"} />
          )}
        />
        <Table.Column
          dataIndex={["permissions"]}
          title={translate("users.fields.permissions")}
          render={(value: string[]) =>
            value
              ?.map(
                (permissionId) =>
                  userPermissions.find((x) => x.id == permissionId)?.name ??
                  permissionId
              )
              .join(", ") ?? "No permissions"
          }
        />
        <Table.Column
          title={translate("table.actions")}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
