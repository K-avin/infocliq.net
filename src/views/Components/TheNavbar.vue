<template>
       <!-- Back to top button -->
  <div class="back-to-top"></div>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
      <div class="container">
        <a href="/" class="navbar-brand">
          <!-- info<span class="text-primary">cliq</span> -->
          <img src="assets/img/logo.png" alt="">

        </a>

        <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link :to="{name: 'home'}" class="nav-link active">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'about-us'}" class="nav-link">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'services'}" class="nav-link">SERVICES</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'blog-index'}" class="nav-link">BLOG</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'contact-us'}" class="nav-link">CONTACT</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'get-quote'}" class="btn btn-primary ml-lg-2">Get Quote</router-link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  </div>  
</template>