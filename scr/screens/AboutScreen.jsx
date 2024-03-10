import React from "react";
import { Text } from "react-native";

import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ }) => {
    return (
        <>
        <MainLayout>
            <Text>Chris's awesome To Do List</Text>
            <Text>Written by: Chris Johnson</Text>
            <Text>Date: March 9, 2024</Text>
        </MainLayout>    
        </>
    );
}

export default AboutScreen;