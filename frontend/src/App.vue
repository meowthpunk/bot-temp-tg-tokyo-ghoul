<template>
  <table class="table">
    <thead>
      <th>Name</th>
      <th>Couse</th>
      <th>Rating</th>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.name }}</td>
        <td>{{ student.course }}</td>
        <td>{{ student.rating }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      students: []
    }
  },
  async created(){
    var response = await fetch('http://127.0.0.1:8000/api/students/')
    this.students = await response.json()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
