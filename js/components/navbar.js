const navContainer = document.getElementById("nav-container");
const footer = document.querySelector("footer")
if(navContainer){
  navContainer.innerHTML = `
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top"
  style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
  <div class="container">
    <a class="navbar-brand" href="https://mbconsultoria.org/">
      <div style="height : 10px;"></div>
      <img class="nav-logo img" src="img/home_logo.png" style="height : 80px;">
      <div <div style="height : 10px;">></div>
    </a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
      data-target="#navbarResponsive" aria-controls="navbarResponsive" style=" color: black;" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="nav-padding collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://mbconsultoria.org/">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://mbconsultoria.org/about">Conócenos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="https://mbconsultoria.org/services" id="navbarDropdownBlog"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Servicios
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
            <!--  <a class="dropdown-item" href="https://mbconsultoria.org/consultoria">Consultoría</a>
              <a class="dropdown-item" href="https://mbconsultoria.org/entrenamiento">Entrenamiento</a>
              <a class="dropdown-item" href="https://mbconsultoria.org/soporte">Soporte</a>-->
            <a class="dropdown-item" href="https://mbconsultoria.org/consultoria">Consultoría</a>
            <a class="dropdown-item" href="https://mbconsultoria.org/lean">Entrenamiento en Lean Six Sigma</a>
            <a class="dropdown-item" href="https://mbconsultoria.org/sgc">Sistema de gestión de calidad</a>
            <a class="dropdown-item" href="https://mbconsultoria.org/erly">Software erly</a>
            <a class="dropdown-item" href="https://mbconsultoria.org/cable">soporte especializado industria del
              cable</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://mbconsultoria.org/experiencia">Experiencia</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Material
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
            <a class="dropdown-item" href="https://mbconsultoria.org/presentaciones">Presentaciones</a>
            <a class="dropdown-item" href="https://mbconsultoria.org/videos">Videos</a>
            <a class="dropdown-item" href="https://mbconsultoria.org/podcast">Podcast</a>
            <span>
              <a class="dropdown-item" href="#courses-menu">Cursos</a>
              <ul class="dropdown-menu dropdown-submenu" id="courses-menu">
                <li>
                  <a class="dropdown-item" href="#">Proximamente Curso 1</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Proximamente Curso 2</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Proximamente Curso 3 </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Proximamente Curso 4</a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">Proximamente Curso 5</a>
                </li>
              </ul>
            </span>
            <ul class="courses-mobile" id="courses-menum">
              <li>
                <a class="dropdown-item" href="#">Proximamente Curso 1</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Proximamente Curso 2</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Proximamente Curso 3 </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Proximamente Curso 4</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Proximamente Curso 5</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://mbconsultoria.org/contact">Contacto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://mbconsultoria.org/faq">FAQ</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `
}
if(footer){
  if(footer.classList.contains("bg-dark")){
    footer.classList.toggle("bg-dark")
    footer.classList.add("bg-secondary")
  }
}