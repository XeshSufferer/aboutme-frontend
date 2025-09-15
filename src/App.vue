<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'

const activeSection = ref('hero')

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId
  }
}

onMounted(() => {
  // Smooth scrolling для всех ссылок
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const targetId = link.getAttribute('href')?.substring(1)
      if (targetId) {
        scrollToSection(targetId)
      }
    })
  })
})
</script>

<template>
  <div id="app">
    <Navigation :active-section="activeSection" @navigate="scrollToSection" />
    
    <main>
      <Hero id="hero" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: #0a0a0a;
  overflow-x: hidden;
}

#app {
  min-height: 100vh;
}

main {
  position: relative;
}

section {
  min-height: 100vh;
  padding: 0;
  position: relative;
}

/* Градиентные фоны для секций */
#hero {
  background: linear-gradient(135deg, #3730a3 0%, #3b0764 100%);
}

#about {
  background: linear-gradient(135deg, #6b21a8 0%, #7f1d1d 100%);
}

#projects {
  background: linear-gradient(135deg, #1d4ed8 0%, #0e7490 100%);
}

#contact {
  background: linear-gradient(135deg, #065f46 0%, #0f766e 100%);
}

/* Анимации */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  section {
    padding: 20px;
  }
}
</style>