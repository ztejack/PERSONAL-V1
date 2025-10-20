<template>
  <section id="hero" class="hero-section">
    <div class="cyber-container">
      <div class="hero-content">
        <!-- Left Side - Content -->
        <div class="hero-left">
          <div class="hero-text">
            <!-- Greeting -->
            <div class="hero-greeting">
              <span class="greeting-text">Hello, I'm</span>
              <div class="greeting-glow"></div>
            </div>
            
            <!-- Title -->
            <h1 class="hero-title">
              <span class="title-main">{{ personalInfo.name }}</span>
              <div class="title-glow"></div>
            </h1>
            
            <!-- Subtitle -->
            <h2 class="hero-subtitle">
              {{ personalInfo.title }}
            </h2>
            
            <!-- Description -->
            <p class="hero-description">
              {{ personalInfo.tagline }}
            </p>

            <!-- Stats -->
            <div class="hero-stats">
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Years Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">50+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">99%</span>
                <span class="stat-label">Client Satisfaction</span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="hero-actions">
              <button @click="scrollToProjects" class="btn-primary">
                View My Work
                <ArrowRight :size="20" />
              </button>
              <button @click="scrollToContact" class="btn-secondary">
                Let's Talk
                <Play :size="18" />
              </button>
            </div>
          </div>
        </div>

        <!-- Right Side - 3D Visual -->
        <div class="hero-right">
          <div class="hero-visual">
            <div class="spline-container">
              <Spline 
                scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode"
                :style="{ width: '100%', height: '100%' }"
              />
            </div>
            <div class="visual-overlay"></div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="hero-scroll-indicator">
        <div class="scroll-line"></div>
        <span class="scroll-text">Scroll Down</span>
      </div>
    </div>
  </section>
</template>

<script>
import { ArrowRight, Play } from 'lucide-vue-next'
import { personalInfo } from '../data/mock'
import Spline from '@splinetool/vue-spline'

export default {
  name: 'CyberHero',
  components: {
    ArrowRight,
    Play,
    Spline
  },
  setup() {
    // Scroll to sections
    const scrollToProjects = () => {
      const element = document.querySelector('#projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    const scrollToContact = () => {
      const element = document.querySelector('#contact')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }

    return {
      personalInfo,
      scrollToProjects,
      scrollToContact
    }
  }
}
</script>