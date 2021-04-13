<template>
  <section>
    <h2 class="visually-hidden">Viðtöl</h2>
    <article
      v-for="(item, $index) in items"
      :key="`item-${$index}`"
      class="article grid md:grid-cols-2 gap-8"
    >
      <div class="embed-container">
        <iframe
          :src="item.video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <small class="uppercase" v-if="item.subtitle">
          {{ item.subtitle }}
        </small>
        <h4 class="my-2">{{ item.title }}</h4>
        <nuxt-content :document="item" />
      </div>
    </article>

    <div class="flex justify-center mt-12">
      <a
        class="btn btn-primary"
        href="https://www.youtube.com/channel/UCJ1XyPIpRD-WovL0-OiM2Dg"
      >
        {{ $t('button.youtube') }}
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
    },
  },
}
</script>

<style scoped lang="postcss">
.article + .article {
  @apply mt-8;
}
</style>
