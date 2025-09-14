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
  
  const projectsSection = document.getElementById('projects')
  if (projectsSection) {
    observer.observe(projectsSection)
  }
})

const projects = [
  {
    id: 1,
    title: 'Riff - Микросервисная чат-система',
    description: 'Экспериментальная чат-система с микросервисной архитектурой. Backend на .NET 9 с Go микросервисами для обработки сообщений и MAUI клиентом для мобильных устройств.',
    technologies: ['C# / .NET 9', 'Go', 'RabbitMQ', 'MongoDB', 'Redis', 'SignalR', 'Docker', 'MAUI', 'SQLite'],
    image: '💬',
    features: [
      'Микросервисная архитектура (Core Gateway + 3 Go сервиса)',
      'Real-time обмен сообщениями через SignalR',
      'MAUI клиент с локальным SQLite кэшем',
      'Асинхронная обработка через RabbitMQ',
      'Кэширование пользователей в Redis',
      'JWT токены для аутентификации',
      'Docker Compose для развертывания'
    ],
    github: 'https://github.com/XeshSufferer/RiffBackend',
    demo: '#',
    status: 'В разработке'
  },
  {
    id: 2,
    title: 'SpeedMath - Игровая платформа',
    description: 'Образовательная платформа для математических игр в реальном времени. Сервер на .NET 9 с SignalR для real-time взаимодействия и MAUI клиент для мобильных устройств.',
    technologies: ['C# / .NET 9', 'MAUI', 'SignalR', 'MongoDB', 'LiteDB', 'JWT', 'Docker', 'MVVM'],
    image: '🎮',
    features: [
      'Игровой сервер с SignalR для real-time взаимодействия',
      'MAUI клиент с MVVM архитектурой',
      'Генератор математических задач (сложение, вычитание, умножение)',
      'Система комнат с таймерами игр',
      'Локальная база LiteDB для статистики',
      'JWT аутентификация и авторизация',
      'Docker контейнеризация для развертывания'
    ],
    github: 'https://github.com/XeshSufferer/PublicSpeedMathServer',
    demo: '#',
    status: 'Завершен'
  }
]

const selectedProject = ref(projects[0])

const selectProject = (project: any) => {
  selectedProject.value = project
}
</script>

<template>
  <section class="projects">
    <div class="projects-container">
      <div class="projects-header" :class="{ 'visible': isVisible }">
        <h2 class="section-title">Мои проекты</h2>
        <p class="section-description">
          Коллекция проектов, демонстрирующих мои навыки в .NET разработке
        </p>
      </div>
      
      <div class="projects-content">
        <div class="projects-grid">
          <div 
            v-for="project in projects" 
            :key="project.id"
            @click="selectProject(project)"
            :class="{ 'active': selectedProject.id === project.id }"
            class="project-card"
          >
            <div class="project-image">
              <span class="project-icon">{{ project.image }}</span>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-technologies">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="tech-more">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              <div class="project-status" :class="project.status.toLowerCase().replace(' ', '-')">
                {{ project.status }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="project-details" :class="{ 'visible': isVisible }">
          <div class="project-detail-card">
            <div class="project-detail-header">
              <span class="project-detail-icon">{{ selectedProject.image }}</span>
              <div>
                <h3 class="project-detail-title">{{ selectedProject.title }}</h3>
                <div class="project-detail-status" :class="selectedProject.status.toLowerCase().replace(' ', '-')">
                  {{ selectedProject.status }}
                </div>
              </div>
            </div>
            
            <p class="project-detail-description">{{ selectedProject.description }}</p>
            
            <div class="project-features">
              <h4>Основные функции:</h4>
              <ul>
                <li v-for="feature in selectedProject.features" :key="feature">
                  <span class="feature-icon">✓</span>
                  {{ feature }}
                </li>
              </ul>
            </div>
            
            <div class="project-tech-stack">
              <h4>Технологический стек:</h4>
              <div class="tech-stack-grid">
                <span 
                  v-for="tech in selectedProject.technologies" 
                  :key="tech"
                  class="tech-stack-item"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="project-actions">
              <a :href="selectedProject.github" class="btn btn-primary">
                <span>GitHub</span>
                <span class="btn-icon">🔗</span>
              </a>
              <a :href="selectedProject.demo" class="btn btn-secondary">
                <span>Демо</span>
                <span class="btn-icon">🚀</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
}

.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

.projects-header {
  text-align: center;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;
}

.projects-header.visible {
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

.projects-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto 60px auto;
}

.project-card {
  background: var(--bg-card);
  border-radius: var(--border-radius-lg);
  padding: 30px;
  cursor: pointer;
  transition: all var(--transition-normal);
  backdrop-filter: blur(15px);
  border: 1px solid var(--border-secondary);
  opacity: 0;
  transform: translateX(-40px) scale(0.95);
  animation: slideInLeft 0.8s var(--transition-slow) forwards;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
  transition: left 0.6s ease;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:nth-child(1) { animation-delay: 0.2s; }
.project-card:nth-child(2) { animation-delay: 0.4s; }

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  background: var(--bg-tertiary);
  border-color: var(--border-accent);
  box-shadow: var(--shadow-glow);
}

.project-card.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.4);
}

.project-image {
  margin-bottom: 15px;
}

.project-icon {
  font-size: 2.5rem;
}

.project-title {
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.project-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 15px;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tech-tag {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.tech-more {
  background: rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-status {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-status.завершен {
  background: rgba(76, 175, 80, 0.3);
  color: #4caf50;
}

.project-status.в-разработке {
  background: rgba(255, 193, 7, 0.3);
  color: #ffc107;
}

.project-details {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease 0.3s;
}

.project-details.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-detail-card {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: fit-content;
  position: sticky;
  top: 100px;
}

.project-detail-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 25px;
}

.project-detail-icon {
  font-size: 3rem;
}

.project-detail-title {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.project-detail-status {
  display: inline-block;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-detail-status.завершен {
  background: rgba(76, 175, 80, 0.3);
  color: #4caf50;
}

.project-detail-status.в-разработке {
  background: rgba(255, 193, 7, 0.3);
  color: #ffc107;
}

.project-detail-description {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.project-features h4,
.project-tech-stack h4 {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.project-features ul {
  list-style: none;
  margin-bottom: 30px;
}

.project-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
}

.feature-icon {
  color: #4caf50;
  font-weight: bold;
}

.tech-stack-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tech-stack-item {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.project-actions {
  display: flex;
  gap: 15px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  flex: 1;
  justify-content: center;
}

.btn-primary {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: #fff;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.1rem;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .projects-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .project-detail-card {
    padding: 25px;
    position: static;
  }
  
  .project-actions {
    flex-direction: column;
  }
}
</style>
