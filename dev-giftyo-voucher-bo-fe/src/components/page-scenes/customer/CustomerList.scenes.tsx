import {
    Button, Container, Divider, FormControl,
    Grid, MenuItem,
    Paper, Select, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow, TextField
} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import styled from "styled-components";
import { useRouter } from 'next/router';

interface Record {
    no: number,
    code: string,
    name: string,
    category: string,
    customerNumber: string,
    phoneNumber: string,
    isUsed: boolean,
    registerDatetime: string,
}

const TableTop = styled(Grid)({
    marginTop: '5px',
    flexDirection: 'row',
});

const TableTopLeftGrid = styled(Grid)({
    display: 'flex',
    paddingLeft: '5px',
    '> *': {
        marginLeft: '5px',
    },
});

const TableTopRightGrid = styled(Grid)({
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingRight: '5px',
    '> *': {
        marginLeft: '5px',
    },
});

const TablePagination = styled(Pagination)({
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
});

const SearchContainer = styled(Container)({
    padding: '24px',
    maxWidth: '100%',
});

const SearchItem = styled(Grid)({
    display: 'flex',
    alignItems: 'center',
});

const SearchItemTitle = styled(Grid)({
    width: '70px',
    textAlign: 'right',
    marginRight: '5px',
});

/**
 * 사업자 목록 컴포넌트
 * @returns {JSX.Element}
 * @since 2023.10.23
 * @author : sung7760@coopnc.com
 */
const CustomerListScenes = () => {
    const router = useRouter();

    const records: Record[] = [
        {
            no: 2,
            code: "QC214PEO2",
            name: "요기요",
            category: "브랜드",
            customerNumber: "211-88-68802",
            phoneNumber: "070-****-1234",
            isUsed: true,
            registerDatetime: "2023-09-03 13:13:04"
        },
        {
            no: 1,
            code: "VP43PZVC3",
            name: "SPC",
            category: "판매채널",
            customerNumber: "133-81-22244",
            phoneNumber: "070-****-4444",
            isUsed: false,
            registerDatetime: "2023-08-31 13:13:11"
        },
    ];

    return (
        <div>
            <Stack spacing={2}>
                <Paper elevation={3}>
                    <SearchContainer>
                        <Grid container spacing={2}>
                            <SearchItem item>
                                <SearchItemTitle>
                                    사업자 코드
                                </SearchItemTitle>
                                <TextField size="small" label={"사업자코드"}/>
                            </SearchItem>
                            <SearchItem item>
                                <SearchItemTitle>
                                    사업자명
                                </SearchItemTitle>
                                <TextField size="small" label={"사업자명"}/>
                            </SearchItem>
                            <SearchItem item>
                                <SearchItemTitle>
                                    사업자구분
                                </SearchItemTitle>
                                <TextField size="small" label={"사업자 구분"}/>
                            </SearchItem>
                            <SearchItem item>
                                <SearchItemTitle>
                                    사업자 등록번호
                                </SearchItemTitle>
                                <TextField size="small" label={"사업자 등록번호"}/>
                            </SearchItem>
                            <SearchItem item>
                                <SearchItemTitle>
                                    사용여부
                                </SearchItemTitle>
                                <TextField size="small" label={"사용여부"}/>
                            </SearchItem>
                            <SearchItem item>
                                <SearchItemTitle>
                                    등록일
                                </SearchItemTitle>
                                <TextField size="small" label={"등록일"}/>
                            </SearchItem>
                        </Grid>
                    </SearchContainer>
                </Paper>

                <Paper elevation={3}>
                    <TableContainer>
                        <TableTop container spacing={2}>
                            <TableTopLeftGrid item xs={4}>
                                <span>검색 결과</span>
                                <span>2건</span>
                            </TableTopLeftGrid>

                            <TableTopRightGrid item xs={8}>
                                <FormControl size="small">
                                    <Select value={10}>
                                        <MenuItem value={10}>10개</MenuItem>
                                        <MenuItem value={20}>20개</MenuItem>
                                        <MenuItem value={30}>30개</MenuItem>
                                    </Select>
                                </FormControl>

                                <Divider orientation="vertical" flexItem />

                                <Button variant="contained"
                                        onClick={() => {
                                            router.push('/customer/add');
                                        }}
                                >등록</Button>
                                <Button variant="outlined">엑셀 다운로드</Button>
                            </TableTopRightGrid>
                        </TableTop>

                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align={'center'}>No</TableCell>
                                    <TableCell align={'center'}>사업자코드</TableCell>
                                    <TableCell align={'center'}>사업자명</TableCell>
                                    <TableCell align={'center'}>사업자 구분</TableCell>
                                    <TableCell align={'center'}>사업자등록번호</TableCell>
                                    <TableCell align={'center'}>대표 전화번호</TableCell>
                                    <TableCell align={'center'}>사용여부</TableCell>
                                    <TableCell align={'center'}>등록일</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {records.map((record) => (
                                    <TableRow key={record.no}>
                                        <TableCell align={'center'}>{record.no}</TableCell>
                                        <TableCell align={'center'}>{record.code}</TableCell>
                                        <TableCell align={'center'}>{record.name}</TableCell>
                                        <TableCell align={'center'}>{record.category}</TableCell>
                                        <TableCell align={'center'}>{record.customerNumber}</TableCell>
                                        <TableCell align={'center'}>{record.phoneNumber}</TableCell>
                                        <TableCell align={'center'}>{record.isUsed ? '사용' : '사용안함'}</TableCell>
                                        <TableCell align={'center'}>{record.registerDatetime}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination count={10}
                                     rowsPerPageOptions={[5, 10, 25]}
                                     size="small"
                                     shape="rounded"
                    />
                </Paper>
            </Stack>
        </div>
    );
};

export default CustomerListScenes;
