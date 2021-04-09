<template>
  <nav>
    <ul class="list-reset flex md:pl-12">
      <li class="px-2">
        <nuxt-link
          class="px-1 text-black uppercase bg-base-500 hover:no-underline"
          :to="switchLocalePath('is')"
        >
          Íslenska
        </nuxt-link>
      </li>
      <li class="px-2">
        <nuxt-link
          class="px-1 text-black uppercase bg-base-500 hover:no-underline"
          :to="switchLocalePath('en')"
        >
          English
        </nuxt-link>
      </li>
      <li class="px-2">
        <nuxt-link
          class="px-1 text-black uppercase bg-base-500 hover:no-underline"
          :to="switchLocalePath('pl')"
        >
          Polskie
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="postcss">
[aria-current='page'] {
  @apply text-blue-500;
}
</style>
