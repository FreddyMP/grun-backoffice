<template>
  <div id="app">
    
    <div>
      <svg class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#42b983" fill-opacity="1" d="M0,160L30,170.7C60,181,120,203,180,202.7C240,203,300,181,360,170.7C420,160,480,160,540,160C600,160,660,160,720,138.7C780,117,840,75,900,64C960,53,1020,75,1080,85.3C1140,96,1200,96,1260,122.7C1320,149,1380,203,1410,229.3L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
      </svg>
      <router-view/>
     <!---<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/puntos">Puntos</router-link>--> 

      <svg class="fixed-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       <path fill="#42b983" fill-opacity="1" d="M0,192L80,197.3C160,203,320,213,480,234.7C640,256,800,288,960,266.7C1120,245,1280,171,1360,133.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </div>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
