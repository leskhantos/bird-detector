<template>
  <el-row justify="center">
    <el-col :md="12" :xs="24" :sm="24">
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <el-col>
            <img
                src="../assets/detection/start.png"
                class="image"
                width="400"
                height="300"
            />
          </el-col>
          <el-col>
            <i>Лапа большого баклана</i>
          </el-col>
        </el-row>


        <div style="padding: 14px">
          <span>Все четыре пальца соединены перепонкой?</span>
          <div class="bottom">
            <el-button round class="button" type="success" @click="this.$router.push('/copepods')">ДА</el-button>
            <el-button round class="button" type="danger" @click="this.$router.push('/notcopepods')">НЕТ</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "StartDetect.vue"
}
</script>

<style scoped>

</style>