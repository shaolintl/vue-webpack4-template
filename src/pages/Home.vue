<template>
  <div class="full-width center-content">
    <ul>
      <li
        v-if="user"
      >
        {{ user.name }}
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
  },
  mounted: function () {
    let v = sessionStorage.user
    if (v !== 'undefined') {
      this.user = JSON.parse(v)
    }
  }
}
</script>
