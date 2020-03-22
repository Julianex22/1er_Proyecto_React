import React from 'react'

const course= [

    {
    id:1,
    title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
    price:"24",
    profesor:"Julian Builes"},

    {
        id:2,
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
    price:"24",
    profesor:"Julian Builes"},

    {
        id:3,
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-09/adobe-xd.png",
    price:"24",
    profesor:"William Arboleda"},

    {
        id:4,
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular-material.png",
    price:"24",
    profesor:"Ciro Perez"},

    {
        id:5,
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AfterEffectsDesdeCero.png",
    price:"24",
    profesor:"Carlos Rodriguez"}
]

const Course= ({match}) =>{/* Aqui se hace un destructurin del objeto props y solo se toma el match */

/* Antes del return yo ouedo establecer logica para el componente */

const CursoActual= course.filter(c=>c.id === parseInt(match.params.id))[0]//filter rrecorre todo el array y devuelve un array conla condicion establecida en la funcion

return(

    CursoActual ? (


<div className="ed-grid m-grid-3">
<h1 className="m-cols-3">{CursoActual.title}</h1>{/*{match.params.id} Este es la propiedad que accede al dato que viene como parametro en la URL */}
    <img className="m-cols-1" src={CursoActual.image}/>
    <p className="m-cols-2">{CursoActual.profesor}</p>
</div>
)
:
<div>
    <h1>El curso no existe</h1>
</div>
)
}


export default Course