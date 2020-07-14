<template>
  <div class="projects">
    <section class="project">
      <p class="project__text" data-splitting>My</p>
      <p class="project__text project__text--stroke" data-splitting>Projects</p>
    </section>
    <section class="project">
      <p class="project__text">UCF</p>
      <p class="project__text project__text--stroke">Parking</p>
    </section>
    <section class="project project--vertical">
      <p class="project__text">Dependency</p>
      <p class="project__text project__text--stroke">Visualizer</p>
    </section>
    <section class="project">
      <p class="project__text">Live</p>
      <p class="project__text project__text--stroke">Code</p>
    </section>
    <section class="project">
      <p class="project__text">Motion</p>
      <p class="project__text project__text--stroke">Py</p>
    </section>
  </div>
</template>

<script>
  import { gsap } from 'gsap'
  import Splitting from 'splitting'

  export default {
    data: () => ({
      animationDuration: 1,
      animationStagger: 0.03
    }),
    beforeRouteLeave(to, from, next) {
      const words = document.querySelectorAll('.char')

      gsap
        .to(words, {
          y: '100%',
          opacity: 1,
          duration: this.animationDuration,
          stagger: this.animationStagger,
          ease: 'Power2.easeIn'
        })
        .eventCallback('onComplete', () => next())
    },
    mounted() {
      Splitting()
      const words = document.querySelectorAll('.char')

      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: '100%'
        },
        {
          opacity: 1,
          y: '0%',
          stagger: this.animationStagger,
          duration: this.animationDuration
        }
      )
    }
  }
</script>

<style lang="scss" scoped>
  @import '../scss/mixins/height';
  @import '../scss/mixins/fonts';

  .projects {
    font-size: 8vw;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: auto;
    flex-wrap: nowrap;
    display: flex;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .project {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 0 auto;
    width: 100%;
    scroll-snap-align: start;

    @include full-height;
  }

  .project--vertical {
    flex-direction: column;

    & .project__text {
      margin: 0;
      overflow: visible;
    }
  }

  .project__text {
    margin: 0 0.35em 0 0;
    cursor: default;
    user-select: none;
    overflow: hidden;
    display: inline;
    text-transform: uppercase;

    @include font('Montserrat');
  }

  .project__text--stroke {
    @supports (-webkit-text-stroke: 1px black) {
      -webkit-text-stroke: 1px black;
      transition: color 0.5s ease-in-out;
      color: white;
      text-decoration: none;
    }
  }
</style>
