<template>
  <main>
    <div class="container">
      <article class="mt-12 md:mt-32">
        <div class="grid gap-8 md:grid-cols-3">
          <div>
            <h2 class="visually-hidden">Um okkur</h2>
          </div>
          <div class="col-span-2 text-xl text-blue-500 font-bold md:text-3xl">
            <nuxt-content :document="hero" />
          </div>
        </div>
      </article>

      <article class="mt-12 md:mt-24">
        <div class="grid gap-8 md:grid-cols-3">
          <h2 class="uppercase text-blue text-sm mt-2">
            {{ body.title }}
          </h2>
          <div class="col-span-2">
            <nuxt-content class="text-xl md:text-2xl" :document="body" />
            <a class="btn btn-primary mt-6" :href="body.brochure">
              {{ $t('button.more') }}
            </a>
          </div>
        </div>
      </article>

      <site-videos class="mt-32" :items="videos" />
    </div>

    <site-about :about="about" />
  </main>
</template>

<script>
import SiteVideos from '@/components/SiteVideos.vue'
import SiteAbout from '@/components/SiteAbout.vue'

export default {
  components: {
    SiteVideos,
    SiteAbout,
  },

  async asyncData(context) {
    const { $content, app } = context
    const videos = await $content(`${app.i18n.locale}/videos`).fetch()
    const about = await $content(`${app.i18n.locale}/about`).fetch()
    const body = await $content(`${app.i18n.locale}/body`).fetch()
    const hero = await $content(`${app.i18n.locale}/hero`).fetch()

    return {
      body,
      hero,
      videos,
      about,
    }
  },
}
</script>
