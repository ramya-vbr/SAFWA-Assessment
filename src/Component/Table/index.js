import React from "react";
import { Table, Card, Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import "./table.css";

const dataSource = [
  {
    key: "1",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
  {
    key: "2",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
  {
    key: "3",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
  {
    key: "4",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
  {
    key: "5",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
  {
    key: "6",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
  {
    key: "7",
    no: "No",
    assets: "Assets Owner Name",
    noOfAssets: "No Of Assets",
    type: "No Of Assets type",
  },
];

const columns = [
  {
    title: "No",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Assets",
    dataIndex: "assets",
    key: "assets",
  },
  {
    title: "No Of Assets",
    dataIndex: "noOfAssets",
    key: "noOfAssets",
  },
  {
    title: "No Of Assets type",
    dataIndex: "type",
    key: "type",
  },
];

function TableComponent({ filter }) {
  return (
    <Card className="table-card table-container">
      <div className="card-header">
        <div className="card-title">List of Submitted Complaint</div>
        {filter ? (
          <div className="filter-container">
            <Input
              placeholder="Search"
              className="table-input"
              suffix={<SearchOutlined />}
            />
            <div className="fliterBtn-container">
              <FilterOutlined />
              <div>Filter</div>
            </div>
          </div>
        ) : (
          <div className="card-right-title">
            <div>Country</div>
            <div>City</div>
          </div>
        )}
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </Card>
  );
}

export default TableComponent;
