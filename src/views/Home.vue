<template>
    <div class="container">
        <!-- Nav -->
        <nav class="main-nav">
            <router-link to="/"><img src="https://img.freepik.com/vector-gratis/gradiente-ilustracion-pajaro-colorido_343694-1741.jpg?w=2000" alt="Logo" class="logo"></router-link>
  
        <ul class="main-menu">
          <li><a href="#servicios">Servicios</a></li>
          <li><router-link to="/about">Acerca de</router-link></li>         
          <li><router-link to="/login">Ingreso</router-link></li>
        </ul>
  
        <ul class="right-menu">
          <li>
            <a href="#">
              <i class="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
        </nav>
  
        <!-- cabecera y fondo de cabecera -->
        <header class="showcase" >
            <h1 style="color:white;">JADEN CORP</h1>
            <p style="color:white;">
            Con nosotros aseguras tu futuro.
            </p>
            <h2 style="color:white;">
                    UNETE YA!
            </h2>
            
        </header>
      
        <!-- Home cards 2 -->
        <section class="home-cards" id="servicios">
                  <div>
                      <img src="https://baufest.com/wp-content/uploads/2022/07/mujer-en-el-metaverso-haciendo-compras-1200x806.jpg" alt="" />
                      <h3>Plan de Ahorro a Futuro</h3>
                      <p>
                        El Plan de Ahorro a Futuro es una estrategia financiera diseñada para ayudarte a construir un camino seguro hacia tus metas y sueños. Con este plan, podrás ahorrar de manera consistente y sistemática a lo largo del tiempo, asegurando una base financiera sólida para el futuro.
                      </p>
                  </div>
                  <div>
                      <img src="https://media.istockphoto.com/id/1343803257/es/foto/serio-pensativo-reflexivo-enfocado-joven-empresario-casual-propietario-de-una-peque%C3%B1a-empresa.jpg?s=612x612&w=0&k=20&c=sM6QJeY-t4jiphg3cnggSynjlj1dG1B5iKyIAjEZHP4=" alt="" />
                      <h3>Caja de Ahorro Personal</h3>
                      <p>
                        Nuestra Caja de Ahorro Personal es tu aliado financiero confiable para lograr tus objetivos financieros a corto plazo. Esta cuenta te brinda la flexibilidad de depositar fondos de manera regular o esporádica, mientras te permite acceder a tus ahorros cuando más lo necesitas.
                      </p>
                  </div>
                  <div>
                      <img src="https://thumbs.dreamstime.com/b/banquero-que-trabaja-en-la-oficina-106332856.jpg" alt="" />
                      <h3>Caja de Ahorro anual</h3>
                      <p>
                        La Caja de Ahorro Anual es una herramienta perfecta para ahorrar de manera disciplinada y planificada para esos momentos especiales que se presentan una vez al año. Ya sea para tus vacaciones soñadas, la temporada navideña o cualquier otro evento importante, esta cuenta te permite separar una porción de tus ingresos regularmente para crear un fondo dedicado a esos gastos anuales.
                      </p>
                  </div>
                  <div>
                      <img src="https://www.mundiario.com/media/mundiario/images/2019/08/28/2019082812190692566.jpg" alt="" />
                      <h3>Premios a nuestros clientes</h3>
                      <p>
                        Creemos en reconocer y recompensar a aquellos que confían en nosotros y forman parte de nuestra familia de clientes. Nuestros premios a clientes son nuestra manera de expresar gratitud por la lealtad y el apoyo que nos brindan día tras día.
                      </p>
                  </div>
        </section>
        
        <!-- Carbon -->
        <section class="carbon dark">
          <div class="content">
            <h2>Piensas ahorrar?</h2>
            <p>Sacar provecho a tus ahorros. Invertir de forma inteligente tu patrimonio te permite multiplicar tus activos a lo largo del tiempo.</p>
          </div>
        </section>
  
        <!-- Cuentas -->
        <section class="follow">
          <p>Sigue nuestras cuentas</p>
          <a href="https://facebook.com"> 
            Facebook
          </a>
          <a href="https://instagram.com"> 
            Instagram
          </a>
        </section>
         <!-- Footer -->
         <footer class="footer">
          <div class="footer-inner">
            <ul>
                <li><a href="#">Contactanos</a></li>
            </ul>
          </div>
        </footer>
    </div>
</template>
<script>
export default{
    name: "Home"
}
</script>
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: #fff;
    color: #000;
    font-size: 15px;
    line-height: 1.5;
  }
  
  a {
    color: #262626;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  .container {
    width: 90%;
    max-width: 1100px;
    margin: auto;
  }
  
  /* Nav */
  .main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 20px 0;
    font-size: 13px;
  }
  
  .main-nav .logo {
    width: 110px;
  }
  
  .main-nav ul {
    display: flex;
  }
  
  .main-nav ul li {
    padding: 0 10px;
  }
  
  .main-nav ul li a {
    padding-bottom: 2px;
  }
  
  .main-nav ul li a:hover {
    border-bottom: 2px solid #262626;
  }
  
  .main-nav ul.main-menu {
    flex: 1;
    margin-left: 20px;
  }
  
  .menu-btn {
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 30px;
    z-index: 2;
    display: none;
  }
  
  .btn {
    cursor: pointer;
    display: inline-block;
    border: 0;
    font-weight: bold;
    padding: 10px 20px;
    background: #262626;
    color: #fff;
    font-size: 15px;;
  }
  
  .btn:hover {
    opacity: 0.9;
  }
  
  .dark {
    color: #fff;
  }
  
  .dark .btn {
    background: #f4f4f4;
    color: #333;
  }
  
  
  .showcase {
    width: 100%;
    height: 300px;
    filter: blur(0px);
    background: url('https://img.freepik.com/fotos-premium/fondo-colorido-fondo-azul-rosa_421632-1845.jpg') no-repeat center center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: flex-end;
    padding-bottom: 50px;
    margin-bottom: 20px;
  }
  
  .showcase h2, .showcase p {
    margin-bottom: 10px;
  }
  
  .showcase .btn {
    margin-top: 20px;
  }
  
  /* Home cards */
  .home-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 40px;
  }
  
  .home-cards img {
    width: 100%;
    margin-bottom: 12px;
  }
  
  .home-cards h3 {
    margin-bottom: 5px;
  }
  
  .home-cards a {
    display: inline-block;
    padding-top: 10px;
    color: #0067b8;
    text-transform: uppercase;
    font-weight: bold;
  }
  
  .home-cards a:hover i {
    margin-left: 10px;
  }
  
  /* Futuro */
  .carbon {
    width: 100%;
    height: 350px;
    background: url('https://img.freepik.com/fotos-premium/particula-tierra-resplandeciente-sostenia-manos-humanas-concepto-tecnologia-datos-grandes_35672-1548.jpg') no-repeat center center/cover;
  }
  
  .carbon .content {
    width: 55%;
    padding: 100px 0 0 30px;
  }
  
  /* Follow */
  .follow {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 30px 0 30px;
  }
  
  .follow * {
    margin-right: 10px;
  }
  
  /* Links */
  .links {
    background: #f2f2f2;
    color: #616161;
    font-size: 12px;
    padding: 35px 0;
  }
  
  .links-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    align-items: flex-start;
    justify-content: center;
  }
  
  .links li {
    line-height: 2.8;
  }
  
  /* Footer */
  .footer {
    background: #f2f2f2;
    color: #616161;
    font-size: 12px;
    padding: 20px 0;
  }
  
  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .footer div {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  
  .footer div i {
    margin-right: 10px;
  }
  
  .footer ul {
    display: flex;
    flex-wrap: wrap;
  }
  
  .footer li {
    margin-right: 30px;
    margin-bottom: 20px;
  }
  
  @media(max-width: 700px) {
    .menu-btn {
      display: block;
    }
  
    .menu-btn:hover {
      opacity: 0.5;
    }
  
    .main-nav ul.right-menu {
      margin-right: 50px;
    }
  
    .main-nav ul.main-menu {
      display: block;
      position: absolute;
      top:0;
      left: 0;
      background: #f2f2f2;
      width: 50%;
      height: 100%;
      border-right: #ccc 1px solid;
      opacity: 0.9;
      padding: 30px;
      transform: translateX(-500px);
      transition: transform 0.5s ease-in-out;
    }
  
    .main-nav ul.main-menu li {
      padding: 10px;
      border-bottom: #ccc solid 1px;
      font-size: 14px;
    }
  
    .main-nav ul.main-menu li:last-child {
      border-bottom: 0;
    }
  
    .main-nav ul.main-menu.show {
      transform: translateX(-20px);
    }
  
    .home-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  
 
    .carbon .content {
      width: 85%;
    }
  
    .links .links-inner {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media(max-width: 500px) {
    .home-cards {
      grid-template-columns: 1fr;
    }
  
    .links .links-inner {
      grid-template-columns: 1fr;
    }
  
    .links .links-inner ul {
      margin-bottom: 20px;
    }
  }
</style>