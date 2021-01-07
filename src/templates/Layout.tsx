import React from "react";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";

interface IProps {
    children: any
}

const Layout: React.FC<IProps> = (props: IProps) => {
    return <React.StrictMode>
        <ThemeProvider>
            <CSSReset />
            <div className="page-wrapper">
                { props.children }
            </div>
        </ThemeProvider>
    </React.StrictMode>
}

export default Layout;