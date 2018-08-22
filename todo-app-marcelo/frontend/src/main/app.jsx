import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

// Aqui no react não usa a palava resevada Class e sim ClassName
// props => () função Arow do javascript, o return é implicito dentro dos parenteses 
// props => ( 1 + 1 )    =    props => { return = 1 + 1}
export default props => (
    <div ClassName='container'>
        <Menu />
        <Routes />    
    </div>    
)