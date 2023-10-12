import React from "react";
import MainLayout from "../layout/MainLayout";
import FullTable from "../complex/FullTable";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormHelperText from "@mui/material/FormHelperText";

export default function MainPage() {
    const sampleTableProps = {
        columnHeaders: [
            { name: "col1", text: "테스트 컬럼1" },
            { name: "col2", text: "테스트 컬럼2" },
            { name: "col3", text: "테스트 컬럼3" },
            { name: "col4", text: "테스트 컬럼4" },
            { name: "col5", text: "테스트 컬럼5" },
            { name: "col6", text: "테스트 컬럼6" },
        ],
        data: [
            {
                col1: "......",
                col2: "......",
                col3: "......",
                col4: "......",
                col5: "......",
                col6: "......",
            },
            {
                col1: "......",
                col2: "......",
                col3: "......",
                col4: "......",
                col5: "......",
                col6: "......",
            },
            {
                col1: "......",
                col2: "......",
                col3: "......",
                col4: "......",
                col5: "......",
                col6: "......",
            },
            {
                col1: "......",
                col2: "......",
                col3: "......",
                col4: "......",
                col5: "......",
                col6: "......",
            },
        ],
    };

    const handleChange = ({ target: { name, value } }) => {
        console.log("filter was changed", { name, value });
    };

    return (
        <MainLayout>
            <FormControl component="fieldset">
                <FormLabel component="legend">유형선택</FormLabel>
                <RadioGroup
                    aria-label=""
                    name="radio"
                    value={1}
                    onChange={handleChange}
                ></RadioGroup>
            </FormControl>
            <FullTable {...sampleTableProps} />
        </MainLayout>
    );
}
