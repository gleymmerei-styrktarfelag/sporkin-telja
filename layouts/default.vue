<template>
  <div>
    <site-header />
    <Nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from '@/components/SiteFooter.vue'
import SiteHeader from '@/components/SiteHeader.vue'

export default {
  components: {
    SiteFooter,
    SiteHeader,
  },
}
</script>

<style lang="postcss">
@font-face {
  font-family: 'walsheim';
  font-weight: normal;
  font-style: normal;
  src: url('~assets/fonts/GT-Walsheim-Regular.woff2') format('woff2'),
    url('~assets/fonts/GT-Walsheim-Regular.woff') format('woff');
}

@font-face {
  font-family: 'walsheim';
  font-weight: bold;
  font-style: normal;
  src: url('~assets/fonts/GT-Walsheim-Bold.woff2') format('woff2'),
    url('~assets/fonts/GT-Walsheim-Bold.woff') format('woff');
}

@font-face {
  font-family: 'walsheim';
  font-weight: normal;
  font-style: italic;
  src: url('~assets/fonts/GT-Walsheim-Regular-Oblique.woff2') format('woff2'),
    url('~assets/fonts/GT-Walsheim-Regular-Oblique.woff') format('woff');
}

@font-face {
  font-family: 'walsheim';
  font-weight: bold;
  font-style: italic;
  src: url('~assets/fonts/GT-Walsheim-Bold-Oblique.woff2') format('woff2'),
    url('~assets/fonts/GT-Walsheim-Bold-Oblique.woff') format('woff');
}

html {
  @apply font-sans leading-normal;

  box-sizing: border-box;
  font-size: 18px;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  @apply font-sans text-gray-900 leading-normal;
}

a {
  @apply text-blue-500 no-underline;

  transition: color 300ms ease-out;
}

a:hover {
  @apply text-blue-800 underline;
}

p {
  /* @apply mt-4; */
  max-width: 32em;
}

p + p {
  @apply mt-6;
}

h1,
h2,
h3 {
  @apply my-6;
  @apply text-blue-500;
  @apply font-bold;
  @apply leading-tight;
}

h1 {
  @apply text-5xl;
}

h2 {
  @apply text-4xl;
}

h3 {
  @apply text-3xl;
}

h4,
.h4 {
  @apply text-2xl my-4 text-blue-500 font-bold;
}

h5,
.h5 {
  @apply text-xl my-4 text-blue-500 font-bold;
}

h6,
.h6 {
  @apply text-lg my-4 text-blue-500 font-bold;
}

.text-xl,
.text-2xl,
.text-3xl {
  max-width: 22em;
}

hr {
  @apply my-4;

  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

.container {
  @apply max-w-7xl mx-auto px-6;
}

.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}

.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.link {
  @apply text-black;

  text-decoration: none;
}

.link::after {
  content: '→';
  @apply text-blue-500;

  display: inline-block;
  padding-left: 0.5em;
  text-decoration: none;
  transition: transform 200ms ease-in-out;
}

.link:hover {
  text-decoration: none;
}

.link:hover::after {
  transform: translateX(5px);
}

.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px);
  clip: rect(1px, 1px, 1px, 1px);
}

.btn {
  @apply inline-block px-6 py-2;
  @apply font-sans font-normal no-underline antialiased text-center whitespace-nowrap;
  @apply border rounded-sm;

  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  vertical-align: middle;
  line-height: inherit;
  cursor: pointer;
  transition: color 200ms ease-out, border-color 250ms ease-out;
}

.btn-primary {
  @apply text-blue-500 bg-transparent border-blue-500;
}

.btn-primary:hover {
  @apply text-blue-800 no-underline border-blue-800;
}
</style>
