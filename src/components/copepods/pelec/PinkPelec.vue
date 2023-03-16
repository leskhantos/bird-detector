<template>
  <el-row justify="center">
    <el-col :md="12" :xs="24" :sm="24">
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
              <span>Лоб голый, лишь посредине его оперение темени оперение выступа-ет вперед в виде треугольника; ноги желтоватые или розоватые?</span>
              <p>ДА</p>
            </el-card>
        </el-timeline-item>
        <el-timeline-item  placement="top">
          <el-card>
            <el-row>
              <el-col>
                <h2>Вид Розовый пеликан - Pelecanus onocrotalus L., 1758</h2>
              </el-col>
              <el-col >
                <img
                    src="@/assets/detection/pelec/pink_pelec.png"
                    class="image"
                    width="400"
                    height="400"
                />
              </el-col>
              <el-col>
                <p>Редкий перелетный вид, спорадично живущий к северу до Наурзума, долины Тобола и Зайсана.
                  Прилетает в феврале – марте. Гнездится колониями на островах. Кладка из 1-3 яиц в апреле – начале мая.
                  Последних видели в середине ноября. Подвидов не образует.</p>
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
  name: "PinkPelec"
}
</script>

<style scoped>

</style>