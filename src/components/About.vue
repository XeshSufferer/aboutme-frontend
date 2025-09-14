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
  
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    observer.observe(aboutSection)
  }
})

const skills = [
  { name: 'C# / .NET 9', level: 90, icon: '🔷' },
  { name: 'SignalR', level: 85, icon: '⚡' },
  { name: 'MongoDB', level: 80, icon: '🗄️' },
  { name: 'Go', level: 75, icon: '🐹' },
  { name: 'RabbitMQ', level: 70, icon: '🐰' },
  { name: 'Redis', level: 65, icon: '🔴' },
  { name: 'Docker', level: 60, icon: '🐳' },
  { name: 'JWT Auth', level: 70, icon: '🔐' }
]

const technologies = [
  { name: '.NET 9', category: 'Framework' },
  { name: 'SignalR', category: 'Real-time' },
  { name: 'MongoDB Driver', category: 'Database' },
  { name: 'RabbitMQ', category: 'Message Broker' },
  { name: 'Redis', category: 'Caching' },
  { name: 'JWT Bearer', category: 'Authentication' },
  { name: 'Docker', category: 'Containerization' },
  { name: 'Go', category: 'Language' },
  { name: 'LiteDB', category: 'Database' },
  { name: 'Microservices', category: 'Architecture' },
  { name: 'WebSocket', category: 'Real-time' },
  { name: 'JSON Serialization', category: 'Data Format' }
]
</script>

<template>
  <section class="about">
    <div class="about-container">
      <div class="about-content" :class="{ 'visible': isVisible }">
        <div class="about-text">
          <h2 class="section-title">О себе</h2>
          <p class="about-description">
            Разработчик с опытом создания микросервисных архитектур и real-time приложений. 
            Специализируюсь на .NET 9, SignalR, MongoDB и межсервисном взаимодействии через RabbitMQ. 
            Создаю игровые серверы и чат-системы с использованием современных технологий.
          </p>
          
          <div class="about-highlights">
            <div class="highlight">
              <span class="highlight-icon">🎯</span>
              <div>
                <h3>Фокус на качестве</h3>
                <p>Создаю чистый, поддерживаемый код с полным покрытием тестами</p>
              </div>
            </div>
            
            <div class="highlight">
              <span class="highlight-icon">🚀</span>
              <div>
                <h3>Производительность</h3>
                <p>Оптимизирую приложения для максимальной скорости и масштабируемости</p>
              </div>
            </div>
            
            <div class="highlight">
              <span class="highlight-icon">🔧</span>
              <div>
                <h3>Современные технологии</h3>
                <p>Использую последние версии .NET и лучшие практики разработки</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="skills-section">
          <h3 class="skills-title">Навыки</h3>
          <div class="skills-grid">
            <div 
              v-for="skill in skills" 
              :key="skill.name" 
              class="skill-item"
            >
              <div class="skill-header">
                <span class="skill-icon">{{ skill.icon }}</span>
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percentage">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="technologies-section" :class="{ 'visible': isVisible }">
        <h3 class="technologies-title">Технологии и инструменты</h3>
        <div class="technologies-grid">
          <div 
            v-for="tech in technologies" 
            :key="tech.name" 
            class="tech-item"
          >
            <span class="tech-name">{{ tech.name }}</span>
            <span class="tech-category">{{ tech.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 80px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.about-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.highlight {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
}

.highlight:hover {
  transform: translateY(-5px);
}

.highlight-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.highlight h3 {
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.highlight p {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.skills-section {
  background: rgba(0, 0, 0, 0.3);
  padding: 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.skills-title {
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
}

.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.skill-item {
  opacity: 0;
  transform: translateX(40px) scale(0.95);
  animation: slideInRight 0.8s var(--transition-slow) forwards;
  transition: all var(--transition-normal);
}

.skill-item:hover {
  transform: translateX(0) scale(1.02);
}

.skill-item:nth-child(1) { animation-delay: 0.2s; }
.skill-item:nth-child(2) { animation-delay: 0.4s; }
.skill-item:nth-child(3) { animation-delay: 0.6s; }
.skill-item:nth-child(4) { animation-delay: 0.8s; }
.skill-item:nth-child(5) { animation-delay: 1.0s; }
.skill-item:nth-child(6) { animation-delay: 0.6s; }
.skill-item:nth-child(7) { animation-delay: 0.7s; }
.skill-item:nth-child(8) { animation-delay: 0.8s; }

.skill-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.skill-name {
  color: #fff;
  font-weight: 600;
  flex: 1;
}

.skill-percentage {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.skill-bar {
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 4px;
  transition: width 1s ease;
}

.technologies-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease 0.5s;
}

.technologies-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.technologies-title {
  color: #fff;
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 600;
}

.technologies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.tech-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.tech-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.tech-name {
  display: block;
  color: #fff;
  font-weight: 600;
  margin-bottom: 5px;
}

.tech-category {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

@keyframes slideInRight {
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
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .skills-section {
    padding: 30px 20px;
  }
  
  .technologies-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .highlight {
    flex-direction: column;
    text-align: center;
  }
}
</style>
