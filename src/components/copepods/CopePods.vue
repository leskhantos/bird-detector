<template>
  <el-row justify="center">
    <el-col span="8">
      <el-timeline>
        <el-timeline-item timestamp="ВОПРОС:" placement="top">
          <el-card>
            <span>Все четыре пальца соединены перепонкой?</span>
            <p>ДА</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="ОТВЕТ:" placement="top">
          <el-card>
            <h2>Отряд ВЕСЛОНОГИЕ – PELECANIFORMES</h2>
            <router-link to="copepodscontinue">Продолжить определение птицы</router-link>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CopePods"
}
</script>

<style scoped>

</style>