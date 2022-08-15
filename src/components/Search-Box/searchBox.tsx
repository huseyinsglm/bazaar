import {Search} from "tabler-icons-react";
import {Input} from "@mantine/core";
import React, {ChangeEvent} from "react";

export function SearchBox({onChange}: { onChange: (e: ChangeEvent<HTMLInputElement>) => void }) {

    return (

        <>
            <Input
                icon={<Search color={"rgb(51, 154, 240)"}/>}
                placeholder="Search In Products"
                radius="md"
                onChange={onChange}
            />

        </>
    )
}