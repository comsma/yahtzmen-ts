import Navigation from "./Navigation";
import {Component} from "react";
import Footer from "./Footer";


export default class Layout extends Component<{ children: any }> {
    render() {
        let {children, ...props} = this.props;
        return (
            <>
                <meta name="theme-color" content="#09142a" />
                <Navigation/>
                {children}
                <Footer/>
            </>
        )
    }
}