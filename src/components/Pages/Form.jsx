import React, {Component} from  "react"



class Form extends Component {

    constructor(props){
        super(props)

        this.state = {

        nombre:"",
        correo:"",
        fecha:null
    }
this.cambiarNombre= this.cambiarNombre.bind(this)
this.cambiarCorreo= this.cambiarCorreo.bind(this)
this.cambiarFecha=this.cambiarFecha.bind(this)
//Tanto el estado como enlazar los nombres de de los metodos se dec   
    }
    

    componentDidMount(){
        this.intervaloFecha= setInterval(() => {
             this.cambiarFecha();
             
             
         }, 1000);
         
     }
     
     componentDidUpdate(prevProps, prevState){
         console.log(prevProps)
         console.log('------')
         console.log(prevState)
     }
     
     componentWillUnmount(){
         clearInterval(this.intervaloFecha)
     }
     
     
    cambiarNombre(e){
        this.setState({
            nombre:e.target.value,
           })
    }

    cambiarCorreo(e){
        this.setState({
            correo:e.target.value,
           })
    }
    cambiarFecha(){
        this.setState({
            fecha:new Date()
        })
    }
    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario</h1>
                <h4>Fecha Actual : {Math.ceil(this.state.fecha/1000)}</h4>
                <form>
                    <div className="form__item">
                         <label >Nombre completo</label>
                         <input type="text" onChange={this.cambiarNombre}
                              />
                       
                    </div>

                    <div className="form__item">
                         <label >Correo elecronico</label>
                         <input type="email" onChange={this.cambiarCorreo}/>
                       
                    </div>

                    <div className="form__item">
                        <input className="button full" type="submit" value="enviar"/>
                    </div>
                </form>
        <h2>{`hola ${this.state.nombre}`}</h2>
                <span>{`Tu correo es ${this.state.correo}`}</span>
                </div>
        )
    }

}


export default Form