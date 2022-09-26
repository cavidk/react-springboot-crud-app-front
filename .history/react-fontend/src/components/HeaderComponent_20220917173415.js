import React, { Component } from 'react'

export default class HeaderComponent extends Component {
  render() {

    return (
       <div>
         <header>
           <nav className='navbar navbar-expand-md navbar-dark bg-dark'></nav>
        <div>
            <a href='https://github.com/cavidk' className='navbar-brand'>
              Employee Management App
            </a>
        </div>
         </header>
       </div>
    )
  }
}
