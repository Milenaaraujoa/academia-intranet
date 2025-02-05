<template>
  <div>
    <div class="bg3">
      <img src="../assets/img/backlaranja.png" alt="Background Topo" />
    </div>
    <div class="navigation">
      <img src="../assets/img/logo.png" alt="Logo" />
      <ul>
        <li>
          <router-link to="/adm_dashboard">
            <span class="title">Página Inicial</span>
          </router-link>
        </li>
        <li>
          <router-link to="/relatorio">
            <span class="title">Relatórios</span>
          </router-link>
        </li>
        <li>
          <router-link to="/eventos">
            <span class="title">Eventos</span>
          </router-link>
        </li>
        <li>
          <router-link to="/turmas">
            <span class="title">Turmas</span>
          </router-link>
        </li>
        <li>
          <router-link to="/login_user">
            <span class="title">Logout</span>
          </router-link>
        </li>
      </ul>
      <div class="bg1">
      <img src="../assets/img/backazulc.png" alt="Background Esquerda" />
    </div>
    </div>
    <div class="bg2">
      <img src="../assets/img/backazule.png" alt="Background Direita" />
    </div>
  </div>
  </template>
  
  <style scoped>

.bg1 {
  width: 300px;
  left: 0;
  bottom: 0;
  margin-left: -40px;
  margin-bottom: -14px;
}
.bg2{
    width: 300px;
    position: absolute;
    right: 0;  
    bottom: 0; 
    z-index: -1;
    margin-right: -80px;
}
.bg3 {
  width: 300px;
  position: absolute;
  right: 0;
  top: 0px; 
  margin-right: -60px;
}
  .navigation {
    position: fixed;
    width: 250px;
    height: 100%;
    background-color: #087285;
    transition: 0.5s;
    overflow: hidden;
  }
  
  .navigation img {
    width: 80%;
    margin: 10px;
    padding-top: 50px;
    margin-left: 40px;
  }
  
  .navigation ul {
    margin-left: 40px;
    text-align: center;
    margin-top: 40px;
  }
  
  .navigation ul li {
    list-style: none;
    padding-left: 40px;
    font-family: 'Anton';
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }
  
  .navigation ul li a {
    text-decoration: none;
    color: white;
  }
  
  .navigation ul li:hover {
    background-color: #F2EEF0;
  }
  
  .navigation ul li:hover a {
    color: #087285;
  }
  </style>