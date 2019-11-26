<template>
  <div class="full-width center-content">
    <ul>
      <li
        v-for="product in products"
        :key="product.name"
      >
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      user: undefined
    }
  },
  created: function () {
    fetch('https://api.myjson.com/bins/a3wyt')
      .then(response => response.json())
      .then(json => {
        this.products = json.products
      })
  }
}
</script>
