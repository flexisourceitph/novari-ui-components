import styled from "styled-components";
import { Row, Col, Divider, Table } from "antd";
import React from "react";


export interface TableProps {
    label: string;
  }

const NovariTable = (props: TableProps ) => {

  
  return (
        <ProductsTable/>
  );

};
export default NovariTable;

const ProductsTable = styled(Table)`
    .tbd-wrapper{
      display:flex;
      align-items:center;
      justify-content:center;
    height:392px;
    backdrop-filter: blur(10px);
    ;
    }

    .ant-table-thead > tr >th{
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #34333E;
    background: #C4C4C4 !important;
    }

    .ant-table-tbody > tr >th{
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #34333E;
    background: #F3F3F3 !important;
    }
    
    .ant-table-tbody > tr >td{
      padding:7px 0px !important;
      border:unset !important;
    }
`;
