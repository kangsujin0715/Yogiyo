import FullTable from "../../components/bo/complex/FullTable";

export default {
    title: "Yogiyo-bo/component/FullTable",
    component: FullTable,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};
const columnHeaders = [
    { name: "test0", text: "컬럼 1" },
    { name: "test1", text: "컬럼 2" },
    { name: "test2", text: "컬럼 3" },
    { name: "test3", text: "컬럼 4" },
    { name: "test4", text: "컬럼 5" },
];
const createSampleData = (count) =>
    Array(count)
        .fill("")
        .map(() =>
            columnHeaders
                .map(({ name }) => name)
                .reduce((acc, cur) => ({ ...acc, [cur]: "......" }), {})
        );

export const emptyData = {
    args: {
        columnHeaders,
        data: [],
    },
};
export const hasData = {
    args: {
        columnHeaders,
        data: createSampleData(10),
    },
};
