
// Initialise IntersectionObserver for scroll animations
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // Unobserve after first trigger for performance
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  const targets = document.querySelectorAll('.animate-on-scroll, .stagger-children')
  targets.forEach((el) => observer.observe(el))
  return observer
}
