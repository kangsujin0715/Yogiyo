import React from "react";
import { Button } from "../../ui/Button";

/**
 * filter props : {onSearch, elements (mui) []}
 */
export default function SearchFilter(props) {
    return (
        <>
            {props.elements.map((el) => {
                el;
            })}
            <Button>검색</Button>
        </>
    );
}
