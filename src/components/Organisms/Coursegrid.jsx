import React from 'react'
import CourseCard from "../Molecules/CourseCard"
const courses= [

    {
    id:'1',
    title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
    price:"24",
    professor:"Julian Builes"},

    {
        id:'2',
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
    price:"24",
    professor:"Julian Builes"},

    {
        id:'3',
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
    price:"24",
    professor:"Julian Builes"},

    {
        id:'4',
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
    price:"24",
    professor:"Julian Builes"},

    {
        id:'5',
        title:"Curso de Drupal",
    image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
    price:"24",
    professor:"Julian Builes"}
]

const CourseGrid= ()=> (

    <div className= "ed-grid m-grid-4">
        {courses.map(c=> <CourseCard
         key={c.id}
         id={c.id}
         title={c.title}
         image={c.image}
         price={c.price}
         professor={c.professor}
         />)}

    </div>
)


export default CourseGrid