import * as React from "react";

import Header from "../Header";
import Footer from "../Footer";
import ProductCard from "../ProductCard";

/**
 * App component.
 */
const App = () => {
    return (
        <React.Fragment>
            <Header title="Savoir-Occitan" />
            <ProductCard />
            <Footer />
        </React.Fragment>
    );
};

export default App;
