<template>
  <footer>
    <div class="container pb-12 pt-6">
      <div class="leading-loose">
        <div class="grid md:grid-cols-2 gap-8">
          <ul class="list-reset mt-6">
            <!-- TODO: translante -->
            <li class="uppercase">Gleym mér ei styrktarfélag</li>
            <li class="mt-4">Kennitala: 501013-1290</li>
            <li>Reikningsnúmer: 111-26-501013</li>
            <li>
              <a href="mailto:gme@gleymmerei-styrktarfelag.is">
                gme@gleymmerei-styrktarfelag.is
              </a>
            </li>
            <li class="mt-4">
              <!-- TODO: translante -->
              Hægt er að hafa samband í síma
              <a href="tel:003546641297">(+354) 664-1297</a> (Árný Heiða)
            </li>
          </ul>
          <ul class="list-reset mt-6">
            <!-- TODO: translante -->
            <li class="uppercase">{{ $t('social') }}</li>
            <li class="mt-4"><a class="link" href="#">Facebook</a></li>
            <li><a class="link" href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
