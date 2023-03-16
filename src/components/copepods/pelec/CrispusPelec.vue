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
            <span>Лоб голый, лишь посредине его оперение темени оперение выступа-ет вперед в виде треугольника; ноги желтоватые или розоватые?</span>
            <p>НЕТ</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item  placement="top">
          <el-card>
            <el-row>
              <el-col>
                <h2>Вид Кудрявый пеликан - Pelecanus crispus Bruch, 1832</h2>
              </el-col>
              <el-col >
                <img
                    src="@/assets/detection/pelec/crisp_pelec.png"
                    class="image"
                    width="400"
                    height="400"
                />
              </el-col>
              <el-col>
                <p>Редкий перелетный вид, живущий к северу до Зайсана, Кургальджино, Наурзума и Донгулюкского водохранилища.
                  Прилетает в марте – апреле. Гнездится колониями на островах. Кладка из 2-4 яиц в апреле – июле. Отлетает в сентябре – октябре.
                  Изредка зимует на Чардаринском водохранилище. Подвидов не образует.</p>
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
  name: "CrispusPelec"
}
</script>

<style scoped>

</style>