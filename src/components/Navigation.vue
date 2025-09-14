<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  activeSection: string
}>()

defineEmits<{
  navigate: [sectionId: string]
}>()

const isMenuOpen = ref(false)

const menuItems = [
  { id: 'hero', label: 'Главная', icon: '🏠' },
  { id: 'about', label: 'О себе', icon: '👨‍💻' },
  { id: 'projects', label: 'Проекты', icon: '🚀' },
  { id: 'contact', label: 'Контакты', icon: '📧' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-menu" :class="{ 'active': isMenuOpen }">
        <ul class="nav-list">
          <li v-for="item in menuItems" :key="item.id" class="nav-item">
            <a 
              @click="$emit('navigate', item.id)"
              :class="{ 'active': activeSection === item.id }"
              class="nav-link"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-label">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </div>
      
      <button @click="toggleMenu" class="menu-toggle">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  position: relative;
}


.nav-menu {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-link.active {
  background: linear-gradient(45deg, #667eea, #764ba2);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-label {
  font-size: 0.9rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  right: 20px;
}

.hamburger {
  width: 25px;
  height: 3px;
  background: #fff;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

/* Mobile styles */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    padding: 20px;
  }
  
  .nav-menu.active {
    transform: translateY(0);
  }
  
  .nav-list {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
  
  .nav-link {
    justify-content: center;
    padding: 15px;
    border-radius: 10px;
  }
  
  .nav-label {
    font-size: 1rem;
  }
}

/* Анимация появления */
.nav-item {
  animation: fadeInUp 0.6s ease forwards;
}

.nav-item:nth-child(1) { animation-delay: 0.1s; }
.nav-item:nth-child(2) { animation-delay: 0.2s; }
.nav-item:nth-child(3) { animation-delay: 0.3s; }
.nav-item:nth-child(4) { animation-delay: 0.4s; }
</style>
