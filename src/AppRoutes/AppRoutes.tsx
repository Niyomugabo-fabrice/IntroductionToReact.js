import {BrowserRouter,Routes,Route} from "react-router-dom";
import Products from "../Components/Products.tsx";
import Services from"../Components/Services.tsx";

export default function AppRoute()
{
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/services" element={<Services/>}/>
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </BrowserRouter>
    )
}