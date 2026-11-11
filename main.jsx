import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
const Err=({e})=><pre style={{color:'#f87171',padding:16,whiteSpace:'pre-wrap',fontFamily:'monospace'}}>{'Lỗi: '+String((e&&e.message)||e)}</pre>
class Boundary extends React.Component{state={e:null};static getDerivedStateFromError(e){return{e}};render(){return this.state.e?<Err e={this.state.e}/>:this.props.children}}
const root=createRoot(document.getElementById('root'))
import('./App.jsx').then(m=>root.render(<Boundary><m.default/></Boundary>)).catch(e=>root.render(<Err e={e}/>))
