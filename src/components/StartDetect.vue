<template>
  <el-row justify="center">
    <el-col span="8">
      <el-card :body-style="{ padding: '0px' }">
        <el-row>
          <el-col>
            <img
                src="../assets/detection/start.png"
                class="image"
                width="400"
                height="300"
            />
          </el-col>\
          <el-col>
            <i>Лапа большого баклана</i>
          </el-col>
        </el-row>


        <div style="padding: 14px">
          <span>Все четыре пальца соединены перепонкой?</span>
          <div class="bottom">
            <el-button round class="button" type="success">ДА</el-button>
            <el-button round class="button" type="danger">НЕТ</el-button>
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