<template>
  <div>
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <a class="navbar-brand float-left">CRUD Vuejs & Router</a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Crear Registro</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/listar">Ver Registros</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>