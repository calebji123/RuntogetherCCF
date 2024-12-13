import React from 'react';
import { Box, Typography } from '@mui/material';

import ModuleWrapper from '../moduleWrapper/moduleWrapper';
import './ckim-test-component.css';

const CkimTestComponent = () => {
    return (
        <>
            <ModuleWrapper className="marginReset padding50" backgroundColor="secondary.main">
                <Box className="ckimMainWrapper">
                    <Box className="ckim-test-component">
                        <Typography variant="h2">ckim Test Component</Typography>
                        <Typography variant="body1">This is a test component created by CKIM.</Typography>
                        <Typography variant="body1">Hello, World!</Typography>
                        <Typography variant="body1">This is a test component created by CKIM.</Typography>
                    </Box>
                </Box>
            </ModuleWrapper>
        </>
    );
};

export default CkimTestComponent;
