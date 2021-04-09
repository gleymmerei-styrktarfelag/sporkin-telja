<template>
  <header class="bg-base-500 py-8">
    <div class="container header-image">
      <div class="header-layout flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <h1 class="text-blue-500 text-3xl m-0">
            <!-- TODO: translante -->
            <span class="visually-hidden">Spörkin telja</span>
            <img
              class="block"
              src="sporkin_telja.png"
              width="100"
              alt="Spörkin telja"
            />
          </h1>

          <nav-lang class="flex-grow" />

          <div>
            <img src="gleymmerei.png" width="50" alt="Gleim mér ei" />
          </div>
        </div>

        <div>
          <h2
            class="text-black leading-none font-normal mt-32"
            v-html="$t('intro')"
          />
          <!-- TODO: translante -->
          <!-- <button class="btn btn-primary bg-base-500">Horfa á myndskeið</button> -->
        </div>
        <div>&nbsp;</div>
      </div>
    </div>
  </header>
</template>

<script>
import NavLang from '@/components/NavLang.vue'

export default {
  components: {
    NavLang,
  },
}
</script>

<style scoped>
.header-layout {
  min-height: 80vh;
}

.header-image {
  background-image: url('~assets/images/kona.png');
  background-repeat: no-repeat;
  background-position: 100% 50%;
  background-size: contain;
}
</style>
