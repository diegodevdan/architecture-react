import {AddressPage, GeneralsPage, SummaryPage, WelcomePage} from "../routes/pages";
import React from "react";
import {RoutesProps} from "../interfaces";

export const RoutesOptions:RoutesProps[] = [
    {
        path: 'welcome',
        element: <WelcomePage />
    },
    {
        path: 'generals',
        element: <GeneralsPage />
    },
    {
        path: 'address',
        element: <AddressPage />
    },
    {
        path: 'summary',
        element: <SummaryPage />
    },
]