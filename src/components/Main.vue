<script setup>
import { Menu, Search } from '@element-plus/icons-vue'

</script>

<template>
  <el-row class="main_page">
    <el-col>
      <h1>Гаврилов Эдуард, Гаврилов Андрей, &nbsp;Карпов Фёдор</h1>
      <h1>ОПРЕДЕЛИТЕЛЬ ПТИЦ КАЗАХСТАНА</h1>
      <p>(пособие для студентов и начинающих специалистов)</p>
      <el-row justify="center">
        <el-button type="success" size="large" class="main_page-btn" @click="$router.push('/menu')" round :icon="Menu">Меню</el-button>
        <el-button type="success" size="large" @click="$router.push('/start-detect')" round :icon="Search">Начать определение</el-button>
      </el-row>

      <el-row justify="center" >
        <p>Разработка программы - Вершняковой Ольги, ее поддержка - Аскара Исабекова
<!--        &nbsp;Модернизация Лесхана Каратаева-->
        </p>
      </el-row>
    </el-col>
  </el-row>
</template>

<style scoped>
.main_page{
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
@media only screen and (max-width: 425px){
  /*Small smartphones [325px -> 425px]*/
  .main_page-btn{
    margin-bottom: 10px;
  }
}

</style>
