<template>
  <footer>
    <div class="center-content content">
      <div class="izquierda">
        <div class="img"><img src="/ARCAFooter.svg" alt="" /></div>
        <div class="">
          <p class="bold">{{ title }}</p>
          <p>{{ subTitle }}</p>
        </div>
      </div>
      <div class="derecha">
        <div class="" v-for="link in links" v-bind:key="link">{{ link }}</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterComp',

  setup() {
    const title = 'CITI ESCRIBANOS'
    const subTitle = 'VERSIÓN consectetur adipiscing elit, sed do eiusmod'

    const links = ['Lorem ipsum dolor', 'Lorem ipsum dolor']
    return {
      title,
      subTitle,
      links,
    }
  },
}
</script>

<style>
footer {
  background-color: var(--vt-c-arca-main);
}

footer .content {
  
  padding-block: 1rem;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  color: white;
}

footer .izquierda {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

footer h1 {
  height: 14px;
  font-weight: bold;
}

footer p {
  font-size: 14px;
}
footer .bold {
  font-weight: bold;
}

footer .derecha {
  text-align: right;
  width: fit-content;
}
</style>
