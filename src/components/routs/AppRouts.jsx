import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../pages/NotFoundPage";
import MainPage from "../../pages/MainPage";
import DetailPages from "../../pages/DetailPages";
import { Layout } from "../header/Layout";


export const AppRoutes = () => {
return(
<Routes>
  <Route path='/' element={<Layout/>}>
    <Route index element={<MainPage/>}/>
    <Route path='DetailPages/:id' element={<DetailPages/>}/>
    <Route path='/*' element={<NotFoundPage/>}/>
   </Route>
</Routes>
 );
}