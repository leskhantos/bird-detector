<template>
  <el-row justify="center">
    <el-col :span="8">
  <el-timeline>
    <el-timeline-item  placement="top">
      <el-card>
        <h2>Отряд ВЕСЛОНОГИЕ – PELECANIFORMES</h2>
      </el-card>
    </el-timeline-item>
    <el-timeline-item  placement="top">
      <el-card>
        <span>Крыло более 500 мм, клюв более 200 мм?</span>
        <p>ДА</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item  placement="top">
      <el-card>
        <h2>Семейство Пеликановые - Pelecanidae</h2>
        <h2>Род Пеликан - Pelecanus</h2>
      </el-card>
    </el-timeline-item>
    <el-timeline-item  placement="top">
      <el-card>
        <el-row>
          <el-col>
            <h3>Крыло более 500 мм, клюв более 200 мм?</h3>
          </el-col>
          <el-col>
            <el-button round class="button" type="success" @click="this.$router.push('pink-pelec')">ДА</el-button>
            <el-button round class="button" type="danger" @click="this.$router.push('crispus-pelec')">НЕТ</el-button>
          </el-col>
          <el-col >
            <img
                src="@/assets/detection/pelec/pelec_nose.png"
                class="image"
                width="400"
                height="500"
            />
          </el-col>
          <el-col>
            <span>Лоб розового пеликана</span>
          </el-col>
        </el-row>
      </el-card>
    </el-timeline-item>
  </el-timeline>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Pelec"
}
</script>

<style scoped>
.image{
  margin-top: 10px;
}
</style>