<template>
  <el-row :gutter="12">
    <el-col v-for="item in menuItems" :span="8" :xs="24" :sm="12" :md="8" :lg="8">
      <el-card shadow="hover" @click="this.$router.push(item.link)" :body-style="{ padding: '10px',cursor: 'pointer' }"> {{ item.name }} </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import menuItems from '../assets/menu_items.json'

</script>

<style scoped>
.el-col {
  margin-bottom: 10px;
}
</style>