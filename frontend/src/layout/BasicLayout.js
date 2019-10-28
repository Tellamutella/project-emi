import React from 'react'
import ProNav from "../components/ProNav";

export default function BasicLayout() {
    return (
        <>
            <ProvNav />
            {props.children}
        </>
    )
}
