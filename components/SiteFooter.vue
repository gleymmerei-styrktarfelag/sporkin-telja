<template>
  <footer>
    <div class="container pb-12 pt-6">
      <div class="leading-loose">
        <div class="grid md:grid-cols-2 gap-8">
          <ul class="list-reset mt-6">
            <li class="uppercase">Gleym mér ei styrktarfélag</li>
            <li class="mt-4">Kennitala: 501013-1290</li>
            <li>{{ $t('bank') }}: 111-26-501013</li>
            <li>
              <a href="mailto:info@sporkintelja.is">info@sporkintelja.is </a>
            </li>
            <li class="mt-4">
              {{ $t('telephone') }}&nbsp;
              <a href="tel:003546641297">(+354) 664-1297</a> (Árný Heiða)
            </li>
          </ul>
          <ul class="list-reset mt-6">
            <li class="uppercase">{{ $t('social') }}</li>
            <li class="mt-4">
              <a class="link" href="https://www.facebook.com/sporkintelja">
                Facebook
              </a>
            </li>
            <li>
              <a class="link" href="https://www.instagram.com/sporkintelja/">
                Instagram
              </a>
            </li>
            <li>
              <a
                class="link"
                href="https://www.youtube.com/channel/UCJ1XyPIpRD-WovL0-OiM2Dg"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
