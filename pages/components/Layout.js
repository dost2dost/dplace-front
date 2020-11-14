import React from 'react';
import Navbar from './Navbar';
import Head from'next/head';

export default function ({children}) {
    return (
        <div >
        <Head>
        
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>

    <link rel="stylesheet" href="/mystyle.css"/>
    
    
        </Head>
           <Navbar/>
           {children}
           <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
   
        </div>
    )
}
