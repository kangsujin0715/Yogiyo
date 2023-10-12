import { Box } from "@mui/material";
import React from "react";
import "../../../asset/component-css/bo/layout/mainLayout.css";
import "../../../asset/component-css/bo/common.css";

export default function MainLayout() {
    return (
        <Box>
            <Box component="header" className="header-container">
                Header Area
            </Box>
            <Box className="flex-box">
                <Box component="aside" className="lnb-container">
                    LNB
                </Box>
                <Box className="main-container">
                    <Box component="nav" className="nav-container">
                        Nav
                    </Box>
                    <Box component="main" className="main">
                        Main
                    </Box>
                </Box>
            </Box>
            <Box className="footer-container">Footer</Box>
        </Box>
    );
}
