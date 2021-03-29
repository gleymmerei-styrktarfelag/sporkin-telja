<template>
  <header class="bg-base-500 py-8">
    <div class="container header-image">
      <div class="header-layout flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <h1 class="text-blue-500 text-3xl m-0">
            <span class="visually-hidden">Spörkin telja</span>
            <img
              class="block"
              src="sporkin_telja.png"
              width="100"
              alt="Spörkin telja"
            />
          </h1>

          <nav class="flex-grow">
            <!-- <ul class="list-reset flex md:pl-6">
              <li class="px-2">
                <a
                  class="px-1 text-black uppercase bg-base-500 hover:no-underline"
                  href="#"
                >
                  Um okkur
                </a>
              </li>
              <li class="px-2">
                <a
                  class="px-1 text-black uppercase bg-base-500 hover:no-underline"
                  href="#"
                >
                  Fræðsla
                </a>
              </li>
              <li class="px-2">
                <a
                  class="px-1 text-black uppercase bg-base-500 hover:no-underline"
                  href="#"
                >
                  Sögur
                </a>
              </li>
              <li class="px-2">
                <a
                  class="px-1 text-black uppercase bg-base-500 hover:no-underline"
                  href="#"
                >
                  Styrkja okkur
                </a>
              </li>
            </ul> -->
          </nav>

          <div>
            <img src="gleymmerei.png" width="50" alt="Gleim mér ei" />
          </div>
        </div>

        <div>
          <h2 class="text-black leading-none font-normal mt-64">
            Þekktu hreyfingar<br />
            barnsins þíns
          </h2>
          <button class="btn btn-primary bg-base-500">Horfa á myndskeið</button>
        </div>

        <div class="pb-8 mt-8 md:mt-64">
          <p>
            <strong>15.október</strong> er alþjóðlegur dagur<br />
            barnsmissis á meðgöngu
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {}
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
