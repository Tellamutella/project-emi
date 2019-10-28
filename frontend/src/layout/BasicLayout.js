import React from 'react'
import ProNav from "../components/ProNav";

export default function BasicLayout(props) {
    return (
        <>
            <ProNav />
            {props.children}
        </>
    )
}
