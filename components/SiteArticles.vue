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
        <small class="uppercase">Viðtal</small>
        <h4 class="my-2">{{ item.title }}</h4>
        <nuxt-content :document="item" />
      </div>
    </article>
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
