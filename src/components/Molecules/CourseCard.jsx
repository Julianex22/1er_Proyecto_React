import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const persona = {'nombre':'Alberto', 'apellido':'Rodriguez', 'edad':34}
const curso= {'title':'Curso de go',imagen:'https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png'}
const mayorDeEdad= (edad) => edad>18

const CourseCard =({id,key,title,image,price,professor})=>(
    
    
<article class="card">
    
  <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
   <Link to={`/cursos/${id}`}><img src={image} alt={title}/></Link>  {/* esta etiqueta link es un enlace pero sin recargar la pagina */}
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 className="center">{title}</h3>
    <div className="s-mb-2 s-main-center">
      {`Prof.:${professor}`}
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://ed.team"><h3>{price}</h3></a>
    </div>
  </div>
</article>

)


CourseCard.propTypes ={
  title:PropTypes.string,
  image:PropTypes.string,
  price:PropTypes.string,
  professor:PropTypes.string
  
}
CourseCard.defaultProps={
  title:"No se encontro titulo",
  image:"https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Creando%20Apis%20Rest.png",
  price:"--",
  professor:""

}

export default CourseCard
