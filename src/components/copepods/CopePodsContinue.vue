<template>
  <el-row justify="center">
    <el-col :span="8">
      <el-timeline>
        <el-timeline-item placement="top">
          <el-card>
            <h2>ОТРЯД ВЕСЛОНОГИЕ – PELECANIFORMES</h2>
          </el-card>
        </el-timeline-item>
        <el-timeline-item  placement="top">
          <el-card>
            <h3>Крыло более 500 мм, клюв более 200 мм?</h3>
            <el-button round class="button" type="success" @click="this.$router.push('pelec')">ДА</el-button>
            <el-button round class="button" type="danger" @click="this.$router.push('')">НЕТ</el-button>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "CopePodsContinue"
}
</script>

<style scoped>

</style>