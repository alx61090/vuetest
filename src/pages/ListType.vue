<template>
  <n-button type="primary">
    <router-link :to="{ name: 'list-category' }">Categorias</router-link>
  </n-button>
  <n-table :bordered="false" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Titulo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tipes" :key="t.id">
        <td>{{ t.title }}</td>
        <td>
          <n-button type='primary'>
            <router-link :to="{ name: 'list-element', params: { type: 't', id: t.id } }">Elementos</router-link>
          </n-button>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>


<script>
export default {
  data() {
    return {
      tipes: []
    }
  },
  mounted() {
    this.$axios.get('http://127.0.0.1:8000/api/type/?format=json')
      .then((res) => {
        this.tipes = res.data.results
      })
  }
}
</script>
<style>
</style>