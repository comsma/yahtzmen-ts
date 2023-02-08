import Navigation from './Navigation'
import { Component } from 'react'
import Footer from './Footer'

export default class Layout extends Component<{ children: any }> {
    render() {
        let { children, ...props } = this.props
        return (
            <>
                <Navigation />
                {children}
                <Footer />
            </>
        )
    }
}
