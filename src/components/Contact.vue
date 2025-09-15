<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    })
  })
  
  const contactSection = document.getElementById('contact')
  if (contactSection) {
    observer.observe(contactSection)
  }
})

const contactInfo = [
  {
    icon: '📱',
    title: 'Telegram',
    value: '@byxesh',
    link: 'https://t.me/byxesh'
  },
  {
    icon: '💻',
    title: 'GitHub',
    value: 'https://github.com/XeshSufferer',
    link: 'https://github.com/XeshSufferer'
  }
]

const socialLinks = [
  { name: 'Telegram', icon: '📱', url: 'https://t.me/byxesh', color: '#0088cc' },
  { name: 'GitHub', icon: '💻', url: 'https://github.com/XeshSufferer', color: '#333333' },
]

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <section class="contact">
    <div class="contact-container">
      <div class="contact-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Свяжитесь со мной</h2>
        <p class="section-description">
          Готов обсудить новые проекты и возможности сотрудничества
        </p>
      </div>
      
      <div class="contact-content">
        <div class="contact-info" :class="{ 'visible': isVisible }">
          <h3 class="contact-info-title">Контактная информация</h3>
          
          <div class="contact-items">
            <div 
              v-for="item in contactInfo" 
              :key="item.title"
              class="contact-item"
              @click="openLink(item.link)"
            >
              <div class="contact-item-icon">
                <span>{{ item.icon }}</span>
              </div>
              <div class="contact-item-content">
                <h4>{{ item.title }}</h4>
                <span class="contact-item-value">
                  {{ item.value }}
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div class="contact-footer" :class="{ 'visible': isVisible }">
        <p class="footer-text">
          © 2025 ByXesh. Все права защищены.
        </p>
        <p class="footer-subtext">
          Vibecoded by By Xesh ❤️
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0 50px;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.contact-header {
  text-align: center;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.contact-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto;
}

.contact-content {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}

.contact-info {
  opacity: 0;
  transform: translateX(-50px);
  transition: all 1s ease 0.2s;
}

.contact-info.visible {
  opacity: 1;
  transform: translateX(0);
}

.contact-info-title {
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.contact-items {
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 25px;
  background: var(--bg-card);
  border-radius: var(--border-radius-lg);
  margin-bottom: 20px;
  cursor: pointer;
  transition: all var(--transition-normal);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border-secondary);
  position: relative;
  overflow: hidden;
}

.contact-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
  transition: left 0.6s ease;
}

.contact-item:hover::before {
  left: 100%;
}

.contact-item:hover {
  transform: translateY(-8px) scale(1.02);
  background: var(--bg-tertiary);
  border-color: var(--border-accent);
  box-shadow: var(--shadow-glow);
}

.contact-item-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.contact-item-content h4 {
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: 600;
}

.contact-item-value {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
}

.contact-item-value:hover {
  color: #fff;
}

.social-links h4 {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.social-link:hover {
  background: var(--social-color);
  transform: translateY(-3px);
}

.social-icon {
  font-size: 1.5rem;
}

.social-name {
  font-weight: 600;
}


.contact-footer {
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s ease 0.6s;
}

.contact-footer.visible {
  opacity: 1;
  transform: translateY(0);
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  margin-bottom: 10px;
}

.footer-subtext {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-item {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
}
</style>
