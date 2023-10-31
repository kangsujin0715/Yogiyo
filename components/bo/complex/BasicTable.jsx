import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../../../asset/bo/component-css/DataTable.css';

const columns = [
  { field: 'id', headerName: 'No', width: 90, },
  { field: 'code', headerName: '사업자코드', width: 150 },
  { field: 'name', headerName: '사업자명', width: 130 },
  { field: 'num', headerName: '사업자등록번호', width: 200 },
  { field: 'call', headerName: '대표 전화번호', width: 170 },
  { field: 'use', headerName: '사용여부', width: 130 },
  { field: 'date', headerName: '등록일', width: 200 },
];

const rows = [
  {
    id: 1,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 2,
    code: 'QC214PE02',
    name: '요기요요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 3,
    code: 'QC214PE02',
    name: '요기요요기',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 4,
    code: 'QC214PE02',
    name: '요기요요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용안함',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 5,
    code: 'QC214PE02',
    name: '요기요요기요요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 6,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 7,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 8,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 9,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 10,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 11,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 12,
    code: 'QC214PE02',
    name: '요기요요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 13,
    code: 'QC214PE02',
    name: '요기요요기',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 14,
    code: 'QC214PE02',
    name: '요기요요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용안함',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 15,
    code: 'QC214PE02',
    name: '요기요요기요요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 16,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 17,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 18,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 19,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
  {
    id: 20,
    code: 'QC214PE02',
    name: '요기요',
    num: '123-45-67890',
    call: '070-****-1234',
    use: '사용',
    date: '2023-09-01 13:33:23',
  },
];

export default function DataTable() {
  return (
    <div
      className="Data-table"
      style={{ height: 677, width: '100%', marginBottom: 5 }}>
      <DataGrid
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 1,
          p: 3,
          mb: 5,
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 20]}
        // checkboxSelection  체크박스
      />
    </div>
  );
}
