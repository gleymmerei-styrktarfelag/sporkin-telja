<template>
  <main>
    <div class="container">
      <article class="mt-12 md:mt-32">
        <div class="grid gap-8 md:grid-cols-3">
          <div>
            <h2 class="visually-hidden">Um okkur</h2>
          </div>
          <div class="col-span-2 text-xl text-blue-500 font-bold md:text-3xl">
            {{ intro.hero }}
          </div>
        </div>
      </article>

      <article class="mt-12 md:mt-24">
        <div class="grid gap-8 md:grid-cols-3">
          <h2 class="uppercase text-blue text-sm mt-2">
            {{ intro.description }}
          </h2>
          <div class="col-span-2 text-xl md:text-2xl">
            <nuxt-content :document="intro" />
          </div>
        </div>
      </article>

      <site-articles class="mt-32" :items="articles" />
    </div>

    <site-about :about="about" />
  </main>
</template>

<script>
import SiteArticles from '@/components/SiteArticles.vue'
import SiteAbout from '@/components/SiteAbout.vue'

export default {
  components: {
    SiteArticles,
    SiteAbout,
  },

  async asyncData(context) {
    const { $content, app } = context
    const articles = await $content(`${app.i18n.locale}/articles`).fetch()
    const about = await $content(`${app.i18n.locale}/about`).fetch()
    const intro = await $content(`${app.i18n.locale}/intro`).fetch()

    return {
      intro,
      articles,
      about,
    }
  },
}
</script>
