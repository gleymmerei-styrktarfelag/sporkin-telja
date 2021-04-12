<template>
  <div class="bg-base-500 py-12 mt-24">
    <div class="container">
      <div class="grid gap-8 lg:grid-cols-6">
        <div class="flex flex-col justify-start">
          <img
            class="block mt-4 mx-auto"
            src="/gleymmerei.png"
            alt="Gleym mer ei"
            width="100"
          />
        </div>

        <div class="col-span-4">
          <h2 class="h5 text-black font-normal mb-2 mt-6">
            {{ about.title }}
          </h2>
          <nuxt-content class="text-lg" :document="about" />
        </div>
        <div class="mt-6 flex flex-col justify-center">
          <!-- <a
              class="btn btn-primary"
              href="https://www.gleymmerei-styrktarfelag.is/"
            >
              Sjá meira
            </a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
    },
  },
}
</script>
