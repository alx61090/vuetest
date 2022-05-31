<template>
  <h1>Listado Categorias</h1>
  <n-button type="primary">
    <router-link :to="{ name: 'list-type' }">Tipos</router-link>
  </n-button>
  <n-table :bordered="false" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Post</th>
        <th>Count</th>
        <th>Text</th>
        <th>id</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="e in elements" :key="e.id">
        <td>{{ e.title }}</td>
        <td>{{ e.comments_count }}</td>
        <td>{{ e.url_clean }}</td>
        <td>{{ e.id }}</td>
        <td>
          <n-button type='primary'>
            <router-link :to="{ name: 'detail-element', params: { slug: e.url_clean} }">Ver</router-link>
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
      elements: []
    }
  },
  mounted() {
    let url = 'http://127.0.0.1:8000/api/element/?format=json'

    if (this.$route.params.type == "c") {
      url = 'http://127.0.0.1:8000/api/category/' + this.$route.params.id + '/elements/?format=json'
    }
    if (this.$route.params.type == "t") {

      url = 'http://127.0.0.1:8000/api/type/' + this.$route.params.id + '/elements/?format=json'
    }


    this.$axios.get(url)
      .then((res) => {
        this.elements = res.data.results ? res.data.results : res.data
      })
  }
}
</script>