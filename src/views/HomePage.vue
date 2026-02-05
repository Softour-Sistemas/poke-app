<template>
  <h1>Hello App!</h1>
  <p><strong>Ruta actual:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/home">Home</RouterLink>
  </nav>
  <nav>
    <RouterLink to="/pokemon">pokemon</RouterLink>
  </nav>

  <RouterView />  
</template>