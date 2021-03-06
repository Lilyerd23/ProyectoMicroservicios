import './App.css';
import Menu                               from "./menuOpciones/menu";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ComponenteCliente                  from "./ClienteComponent/ComponenteCliente";
import ListarCliente                      from "./ClienteComponent/ListarCliente";
import ListarDetalles                     from "./ClienteComponent/ListarDetalles";
import ListarProductos                    from "./ProductComponent/ListarProductos";
import RegistrarProductos                 from "./ProductComponent/RegistrarProductos";

function App() {
    return (
        <div>
            <Router>
                <Menu/>
                <div className="components">
                    <Route path="/component-clientes" exact component={ ComponenteCliente }/>
                    <Route path="/view-clientes" exact component={ ListarCliente }/>
                    <Route path="/view-detalles" exact component={ ListarDetalles }/>

                    <Route path="/product-list" exact component={ ListarProductos }/>
                    <Route path="/registro-producto/:id" exact component={ RegistrarProductos }/>
                </div>
            </Router>
        </div>
    );
}

export default App;
