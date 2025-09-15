<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 300)
})

const scrollToContact = () => {
  const element = document.getElementById('contact')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content" :class="{ 'visible': isVisible }">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="greeting">Привет! Я</span>
            <span class="name">ByXesh</span>
            <span class="role">Full-Stack .NET Developer</span>
          </h1>
          
          <p class="hero-description">
            Создаю микросервисные архитектуры, real-time приложения и игровые серверы 
            с использованием .NET 9, SignalR, MongoDB и современных технологий
          </p>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">3+</span>
              <span class="stat-label">активных проекта</span>
            </div>
            <div class="stat">
              <span class="stat-number">2</span>
              <span class="stat-label">языка (.NET + Go)</span>
            </div>
            <div class="stat">
              <span class="stat-number">5+</span>
              <span class="stat-label">технологий</span>
            </div>
          </div>
          
          <div class="hero-actions">
            <button @click="scrollToContact" class="btn btn-primary">
              <span>Связаться со мной</span>
              <span class="btn-icon">📧</span>
            </button>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-window">
            <div class="window-header">
              <div class="window-controls">
                <span class="control red"></span>
                <span class="control yellow"></span>
                <span class="control green"></span>
              </div>
              <span class="window-title">UniversalRequestTracker.cs</span>
            </div>
            <div class="code-content">
              <pre><code>// Микросервисная архитектура с Correlation ID
public class UniversalRequestTracker : IUniversalRequestTracker
{
    // Thread-safe коллекция для отслеживания асинхронных запросов
    private readonly ConcurrentDictionary&lt;string, TaskCompletionSource&lt;object&gt;&gt; _pendingRequests = new();

    /// &lt;summary&gt;
    /// Ожидает ответ на запрос по Correlation ID с автоматической десериализацией
    /// &lt;/summary&gt;
    public async Task&lt;T&gt; WaitForResponseAsync&lt;T&gt;(string correlationId)
    {
        // Получаем результат асинхронной операции
        var result = await _pendingRequests[correlationId].Task;
        
        // Pattern matching для автоматического преобразования типов
        return result switch
        {
            T typedResult => typedResult,                    // Уже нужного типа
            string jsonString => JsonSerializer.Deserialize&lt;T&gt;(jsonString), // JSON строка
            _ => throw new InvalidCastException()            // Неподдерживаемый тип
        };
    }
}</code></pre>
            </div>
          </div>
          
          <div class="floating-elements">
            <div class="floating-element" style="--delay: 0s">
              <span class="tech-icon">⚡</span>
              <span>.NET 9</span>
            </div>
            <div class="floating-element" style="--delay: 1s">
              <span class="tech-icon">🐰</span>
              <span>RabbitMQ</span>
            </div>
            <div class="floating-element" style="--delay: 2s">
              <span class="tech-icon">🗄️</span>
              <span>MongoDB</span>
            </div>
            <div class="floating-element" style="--delay: 3s">
              <span class="tech-icon">🔴</span>
              <span>Redis</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="scroll-indicator">
      <div class="scroll-arrow"></div>
      <span>Прокрутите вниз</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: var(--primary-gradient);
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(99, 102, 241, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.2s var(--transition-slow);
}

.hero-content.visible {
  opacity: 1;
  transform: translateY(0);
}

.hero-text {
  animation: fadeInLeft 1.2s var(--transition-slow) 0.6s both;
}

.hero-title {
  margin-bottom: 30px;
  line-height: 1.2;
}

.greeting {
  display: block;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
  font-weight: 400;
}

.name {
  display: block;
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 15px;
  background: linear-gradient(45deg, #fff, #e0e0e0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.role {
  display: inline-block;
  font-size: 1.8rem;
  color: var(--text-primary) !important;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  padding: 16px 32px;
  border-radius: var(--border-radius-xl);
  background: var(--bg-glass) !important;
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-accent);
  box-shadow: var(--shadow-primary);
  transition: all var(--transition-normal);
  animation: glow 3s ease-in-out infinite;
}

.role:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-actions {
  display: flex;
  gap: 20px;
}

.btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  min-height: 48px;
  touch-action: manipulation;
}

.btn-primary {
  background: var(--primary-gradient);
  color: var(--text-primary);
  box-shadow: var(--shadow-primary);
  transition: all var(--transition-normal);
}

.btn-primary:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--shadow-glow);
  animation: pulse 2s infinite;
}

.btn-secondary {
  background: var(--bg-glass);
  color: var(--text-primary);
  border: 1px solid var(--border-accent);
  backdrop-filter: blur(10px);
  transition: all var(--transition-normal);
}

.btn-secondary:hover {
  background: var(--bg-tertiary);
  transform: translateY(-3px) scale(1.02);
  border-color: var(--text-accent);
  box-shadow: var(--shadow-primary);
}

.btn-icon {
  font-size: 1.2rem;
}

.hero-visual {
  position: relative;
  animation: fadeInRight 1s ease 0.6s both;
}

.code-window {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.window-header {
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.window-controls {
  display: flex;
  gap: 8px;
}

.control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.control.red { background: #ff5f57; }
.control.yellow { background: #ffbd2e; }
.control.green { background: #28ca42; }

.window-title {
  color: #fff;
  font-weight: 500;
}

.code-content {
  padding: 20px;
}

.code-content pre {
  margin: 0;
  color: #e0e0e0;
  font-family: 'Fira Code', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px 15px;
  border-radius: 25px;
  color: #fff;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
  animation: float 6s ease-in-out infinite;
  animation-delay: var(--delay);
}

.floating-element:nth-child(1) {
  top: 20%;
  right: -20px;
}

.floating-element:nth-child(2) {
  top: 40%;
  left: -30px;
}

.floating-element:nth-child(3) {
  bottom: 30%;
  right: -25px;
}

.floating-element:nth-child(4) {
  bottom: 10%;
  left: -20px;
}

.tech-icon {
  font-size: 1.2rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.7);
  animation: bounce 2s infinite;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
}

.scroll-arrow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: -3px;
  width: 8px;
  height: 8px;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
  transform: rotate(45deg);
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { 
    transform: translateX(-50%) translateY(0); 
  }
  40% { 
    transform: translateX(-50%) translateY(-8px); 
  }
  60% { 
    transform: translateX(-50%) translateY(-4px); 
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-container {
    padding: 0 30px;
  }
  
  .hero-content {
    gap: 50px;
  }
  
  .name {
    font-size: 3rem;
  }
  
  .role {
    font-size: 1.6rem;
    padding: 14px 28px;
  }
  
  .hero-stats {
    gap: 35px;
  }
  
  .stat-number {
    font-size: 2.2rem;
  }
  
  .code-content pre {
    font-size: 0.85rem;
  }
}

@media (max-width: 900px) {
  .hero-content {
    gap: 40px;
  }
  
  .name {
    font-size: 2.8rem;
  }
  
  .role {
    font-size: 1.4rem;
    padding: 12px 24px;
  }
  
  .hero-stats {
    gap: 30px;
  }
  
  .stat-number {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    padding: 90px 0 120px;
    overflow-x: hidden;
  }
  
  .hero-container {
    padding: 0 16px;
    max-width: 100%;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: left;
    width: 100%;
  }
  
  .hero-text {
    order: 1;
    width: 100%;
    margin-top: 10px;
  }
  
  .hero-visual {
    order: 2;
    width: 100%;
  }
  
  .greeting {
    font-size: 1.2rem;
    margin-bottom: 6px;
  }
  
  .name {
    font-size: 2.4rem;
    margin-bottom: 10px;
    line-height: 1.1;
  }
  
  .role {
    font-size: 1.1rem;
    padding: 10px 20px;
    margin-bottom: 14px;
    display: inline-block;
    max-width: 100%;
    word-wrap: break-word;
  }
  
  .hero-description {
    font-size: 1rem;
    margin-bottom: 30px;
    line-height: 1.5;
    padding: 0 10px;
  }
  
  .hero-stats {
    justify-content: flex-start;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
  }
  
  .stat {
    min-width: 70px;
    flex: 1;
    max-width: 100px;
  }
  
  .stat-number {
    font-size: 1.8rem;
  }
  
  .stat-label {
    font-size: 0.75rem;
    line-height: 1.2;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding: 0 10px;
  }
  
  .btn {
    width: 100%;
    max-width: 260px;
    justify-content: flex-start;
    padding: 12px 24px;
    font-size: 0.9rem;
  }
  
  .code-window {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
  
  .window-header {
    padding: 10px 14px;
  }
  
  .code-content {
    padding: 12px;
    overflow-x: auto;
  }
  
  .code-content pre {
    font-size: 0.75rem;
    line-height: 1.3;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  
  .floating-elements {
    display: none;
  }
  
  .scroll-indicator {
    bottom: 15px;
  }
  
  .scroll-indicator span {
    font-size: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 70px 0 110px;
    min-height: 100vh;
  }
  
  .hero-container {
    padding: 0 12px;
  }
  
  .hero-content {
    gap: 25px;
  }
  
  .greeting {
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
  
  .name {
    font-size: 2.2rem;
    margin-bottom: 8px;
    line-height: 1.1;
  }
  
  .role {
    font-size: 1rem;
    padding: 8px 16px;
    margin-bottom: 12px;
    line-height: 1.3;
  }
  
  .hero-description {
    font-size: 0.95rem;
    margin-bottom: 25px;
    padding: 0 5px;
    line-height: 1.4;
  }
  
  .hero-stats {
    gap: 15px;
    margin-bottom: 25px;
  }
  
  .stat {
    min-width: 60px;
    max-width: 80px;
  }
  
  .stat-number {
    font-size: 1.6rem;
  }
  
  .stat-label {
    font-size: 0.7rem;
    line-height: 1.1;
  }
  
  .hero-actions {
    gap: 10px;
    padding: 0 5px;
  }
  
  .btn {
    max-width: 240px;
    padding: 10px 20px;
    font-size: 0.85rem;
  }
  
  .code-window {
    border-radius: 12px;
  }
  
  .window-header {
    padding: 8px 12px;
  }
  
  .code-content {
    padding: 10px;
  }
  
  .code-content pre {
    font-size: 0.7rem;
    line-height: 1.2;
  }
  
  .scroll-indicator {
    bottom: 10px;
  }
  
  .scroll-indicator span {
    font-size: 0.7rem;
  }
}

@media (max-width: 360px) {
  .hero {
    padding: 60px 0 100px;
  }
  
  .hero-container {
    padding: 0 10px;
  }
  
  .hero-content {
    gap: 20px;
  }
  
  .greeting {
    font-size: 1rem;
    margin-bottom: 3px;
  }
  
  .name {
    font-size: 2rem;
    margin-bottom: 6px;
    line-height: 1.1;
  }
  
  .role {
    font-size: 0.95rem;
    padding: 6px 12px;
    margin-bottom: 10px;
    line-height: 1.2;
  }
  
  .hero-description {
    font-size: 0.9rem;
    margin-bottom: 20px;
    padding: 0 3px;
    line-height: 1.3;
  }
  
  .hero-stats {
    gap: 12px;
    margin-bottom: 20px;
  }
  
  .stat {
    min-width: 50px;
    max-width: 70px;
  }
  
  .stat-number {
    font-size: 1.4rem;
  }
  
  .stat-label {
    font-size: 0.65rem;
    line-height: 1.1;
  }
  
  .hero-actions {
    gap: 8px;
    padding: 0 3px;
  }
  
  .btn {
    max-width: 220px;
    padding: 8px 16px;
    font-size: 0.8rem;
  }
  
  .code-window {
    border-radius: 10px;
  }
  
  .window-header {
    padding: 6px 10px;
  }
  
  .code-content {
    padding: 8px;
  }
  
  .code-content pre {
    font-size: 0.65rem;
    line-height: 1.1;
  }
  
  .scroll-indicator {
    bottom: 8px;
  }
  
  .scroll-indicator span {
    font-size: 0.65rem;
  }
}
</style>
