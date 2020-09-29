<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h4><b>Today Summary</b></h4>
        </v-flex>
        <!-- mini statistic start -->

        <v-flex lg8 sm12 xs12>
          <v-widget title="Overall Statistic" content-bg="white">
            <div slot="widget-content">
              <v-layout row wrap>
                <v-flex lg3 sm6 xs12>
                  <mini-statistic
                    icon="fa fa-road"
                    title="Total Pass By"
                    number="359"
                    sub-title="Cars"
                    color="color1"
                    iconcolor="white"
                  ></mini-statistic>
                </v-flex>
                <v-flex lg3 sm6 xs12>
                  <mini-statisticSP
                    peaktime="5 PM"
                    besttime="3 AM"
                    color="black"
                  ></mini-statisticSP>
                </v-flex>
                <v-flex lg3 sm6 xs12>
                  <mini-statistic
                    icon="fa fa-car"
                    title="Total Parking "
                    number="359"
                    sub-title="Cars"
                    color="color3"
                    iconcolor="white"
                  ></mini-statistic>
                </v-flex>
                <v-flex lg3 sm6 xs12>
                  <mini-statistic
                    icon="fa fa-clock-o"
                    title="AVG Parking Time"
                    number="84"
                    sub-title="Minutes"
                    color="color4"
                    iconcolor="white"
                  ></mini-statistic>
                </v-flex>
              </v-layout>
            </div>
          </v-widget>
        </v-flex>

        <!-- Live Parking Circle statistic -->
        <v-flex
          lg4
          sm12
          xs12
          v-for="(item, index) in trending"
          :key="'c-trending' + index"
        >
          <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
            :percent="item.percent"
          ></circle-statistic>
        </v-flex>

        <!--Parking Time Series -->
        <v-flex lg12 sm12 xs12>
          <v-widget title="Parking Density" content-bg="white">
            <v-btn slot="widget-header-action">
              <b>Today</b>
              <!-- <v-icon class="text--secondary">refresh</v-icon> -->
            </v-btn>
            <v-btn slot="widget-header-action">
              <b>This Week</b>
              <!-- <v-icon class="text--secondary">refresh</v-icon> -->
            </v-btn>
            <div slot="widget-content">
              <ParkingChartJs style="height: 22rem"></ParkingChartJs>
            </div>
          </v-widget>
        </v-flex>

        <v-flex sm12>
          <br />
          <h4><b>Road Statistic</b></h4>
        </v-flex>

        <!-- Traffic Counting Bar -->
        <v-flex lg8 sm12 xs12>
          <v-widget
            title="Road Vehicle Counting (This Week)"
            content-bg="white"
          >
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', siteTrafficData],
                  [
                    'color',
                    [
                      color.lightBlue.base,
                      color.green.lighten1,
                      color.indigo.base,
                      color.cyan.base,
                    ],
                  ],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}],
                  ['series[2].smooth', true],
                  ['series[2].type', 'bar'],
                  ['series[2].areaStyle', {}],
                  ['series[3].smooth', true],
                  ['series[3].type', 'bar'],
                  ['series[3].areaStyle', {}],
                ]"
                height="400px"
                width="100%"
              ></e-chart>
            </div>
          </v-widget>
        </v-flex>
        <!-- Categories Pie -->
        <v-flex lg4 sm12 xs12>
          <v-widget title="Categories Count (This Week)" content-bg="white">
            <div slot="widget-content">
              <e-chart
                :path-option="[
                  ['dataset.source', locationData],
                  ['legend.bottom', '0'],
                  [
                    'color',
                    [
                      color.lightBlue.base,
                      color.indigo.base,
                      color.pink.base,
                      color.green.base,
                      color.cyan.base,
                      color.teal.base,
                    ],
                  ],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],
                  ['series[0].radius', ['50%', '70%']],
                ]"
                height="400px"
                width="100%"
                >5000</e-chart
              >
            </div>
          </v-widget>
        </v-flex>

        <v-flex lg8 sm12 xs12>
          <v-widget title="Parking Density" content-bg="white">
            <div slot="widget-content">
              <PoomChart></PoomChart>
            </div>
          </v-widget>

          <!-- Fancy Line Chart -->
        </v-flex>
        <v-flex lg4 sm12 xs12>
          <box-chart
            class="mt-0"
            card-color="cyan"
            title="Traffic density level"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.lightBlue.darken1, 'rgba(255,255,255,0.3)']"
            gradient
            type="area"
          ></box-chart>
        </v-flex>

        <!-- acitivity/chat widget -->
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from "@/api";
import EChart from "@/components/chart/echart";
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import MiniStatisticSP from "@/components/widgets/statistic/MiniStatisticSP";
import PostListCard from "@/components/widgets/card/PostListCard";
import ProfileCard from "@/components/widgets/card/ProfileCard";
import PostSingleCard from "@/components/widgets/card/PostSingleCard";
import WeatherCard from "@/components/widgets/card/WeatherCard";
import PlainTable from "@/components/widgets/list/PlainTable";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder";
import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";
import VCircle from "@/components/circle/VCircle";
import BoxChart from "@/components/widgets/chart/BoxChart";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic";
import ParkingChartJs from "@/components/widgets/chart/ParkingChartJs";
import PoomChart from "@/components/widgets/chart/PoomChart";

export default {
  layout: "dashboard",
  components: {
    VWidget,
    MiniStatistic,
    MiniStatisticSP,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder,
    ParkingChartJs,
    PoomChart,
  },
  data: () => ({
    color: Material,
    selectedTab: "tab-1",
    categories: "Car",
    currentcar: 148,
    trending: [
      {
        subheading: "Live Parking Data",
        headline: "15+",
        caption: "email opens",
        percent: (150 / 300) * 100,
        valueshow: 100,
        icon: {
          label: "email",
          color: "info",
        },
        linear: {
          value: 274,
          color: "info",
        },
      },
    ],
  }),
  computed: {
    siteTrafficData() {
      return API.getMonthVisit;
    },
    locationData() {
      return API.getLocation;
    },
    levelData() {
      return API.trafficlevel;
    },
  },
};
</script>

<style scoped>
/* LIVE ICON */
*:before,
*:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.video__icon {
  margin-top: -6px;
  position: absolute;
  width: 50px;
  left: 20px;
  top: 20px;
}
.video__icon .circle--outer {
  border: 1px solid #e50040;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 auto 5px;
  position: relative;
  opacity: 0.8;
  -webkit-animation: circle 2s ease-in-out infinite;
  animation: circle 2s ease-in-out infinite;
}
.video__icon .circle--inner {
  background: #e50040;
  left: 15px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;

  opacity: 0.8;
}
.video__icon .circle--inner:after {
  content: "";
  display: block;
  border: 2px solid #e50040;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  top: -4px;
  left: -4px;
  position: absolute;
  opacity: 0.8;
  -webkit-animation: circle 2s ease-in-out 0.2s infinite;
  animation: circle 2s ease-in-out 0.2s infinite;
}
.video__icon p {
  color: #000;
  text-align: center;
}

@-webkit-keyframes circle {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes circle {
  from {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 0;
  }
}
/* LIVE ICON END */
</style>
