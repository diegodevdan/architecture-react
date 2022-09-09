import React from 'react';
import {Route, Routes, useParams} from "react-router-dom";
import {RoutesOptions} from "../data/routesElements";
import {NotFound} from "./pages";
import {InformationProvider} from "../context/InformationProvider";

export const RouterController = () => {
    useParams()
    return (
        <InformationProvider>
            <Routes>
                {
                    RoutesOptions.map(({path, element}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))
                }
                <Route
                    path={'*'}
                    element={<NotFound />}
                />
            </Routes>
        </InformationProvider>
    );
};