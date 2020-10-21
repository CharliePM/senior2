<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h4><b>Today Summary : </b> {{ today }} {{ myrefresh }}</h4>
        </v-flex>

        <!-- mini statistic start -->
        <v-flex lg8 sm12 xs12>
          <v-widget title="Overall Statistic" content-bg="white">
            <div slot="widget-content">
              <v-layout row wrap>
                <v-flex lg3 sm6 xs12>
                  <mini-statistic
                    v-if="todayroad"
                    :number="todayroad"
                    icon="fa fa-road"
                    title="Total Pass By"
                    sub-title="Cars"
                    color="color1"
                    iconcolor="white"
                  ></mini-statistic>
                </v-flex>
                <v-flex lg3 sm6 xs12>
                  <mini-statisticSP
                    v-if="todaypeak && todayleast"
                    :peaktime="todaypeak"
                    :besttime="todayleast"
                  ></mini-statisticSP>
                </v-flex>
                <v-flex lg3 sm6 xs6>
                  <mini-statistic
                    icon="fa fa-car"
                    title="Total Parking "
                    number="359"
                    sub-title="Cars"
                    color="color3"
                    iconcolor="white"
                  ></mini-statistic>
                </v-flex>
                <v-flex lg3 sm6 xs6>
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
        <!-- :value="ToDos.B1X" -->
        <v-flex
          lg4
          sm12
          xs12
          v-for="(item, index) in trending"
          :key="'c-trending' + index"
        >
          <circle-statistic
            v-if="ToDos"
            :livecar="ToDos"
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :color="item.linear.color"
            :value="ToDos.B1X"
            :percent="mypercent"
          ></circle-statistic>
        </v-flex>

        <!--Road Time Series -->
        <v-flex lg8 sm12 xs12>
          <v-card class="timeseriesbg">
            <v-card-title>
              <h4 style="color: white" class="ml-1">
                <b>Hourly Vehicles Count </b>
              </h4>
            </v-card-title>

            <DailyTraffic class="mr-2" style="height: 21.5rem"></DailyTraffic>
          </v-card>
        </v-flex>

        <!-- Traffic Level Bar -->
        <v-flex lg4 sm12 xs12>
          <v-widget title="Traffic Density" content-bg="white">
            <div slot="widget-content">
              <LevelChart
                v-if="myrefresh"
                :myrefresh="myrefresh"
                style="height: 20rem"
              ></LevelChart>
            </div>
          </v-widget>
        </v-flex>

        <!-- **********************************************WEEK***************************************************** -->

        <v-flex sm12>
          <br />
          <h4><b>Weekly Road Statistic : </b> From {{ thismon }}</h4>
        </v-flex>

        <!-- Categories Pie -->
        <v-flex lg4 sm12 xs12>
          <v-card class="piebg">
            <v-card-title class="ml-0">
              <h4 style="color: white" class="ml-0">
                <b> Weekly Total Vehicles: </b> <b style="color: white"> {{weektotal}} </b>
              </h4>
            </v-card-title>

            <e-chart
              v-if="currentcar"
              :number="currentcar"
              :path-option="[
                ['dataset.source', mylocationData],

                ['legend.bottom', '0'],
                [
                  'color',
                  [
                    '#323ff1',
                    '#00b8ff',
                    '#cc88ff',
                    '#7642d0',
                  ],
                ],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['series[0].type', 'pie'],
                ['series[0].avoidLabelOverlap', true],
                ['series[0].radius', ['50%', '70%']],
              ]"
              height="420px"
              width="100%"
            ></e-chart>
          </v-card>
        </v-flex>

        <!-- Traffic Counting Group Bar -->
        <v-flex lg8 sm12 xs12>
          <v-card class="groupbg">
            <v-card-title>
              <h4 style="color: white" class="ml-1">
                <b> Categories Count by Day </b>
              </h4>
            </v-card-title>

            <PoomChart
              v-if="myrefresh"
              :myrefresh="myrefresh"
              class="mr-2"
              style="height: 420px"
            ></PoomChart>
          </v-card>
        </v-flex>

        <!-- acitivity/chat widget -->
        <v-flex lg8 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>

        <!-- Fancy Line Chart -->
        <v-flex lg4 sm12 xs12>
          <box-chart
            class="mt-0"
            card-color="cyan"
            title="Parking density level"
            sub-title="10%"
            icon="trending_up"
            :data="siteTrafficData"
            :chart-color="[color.lightBlue.darken1, 'rgba(255,255,255,0.3)']"
            gradient
            type="area"
            style="height: 25rem"
          ></box-chart>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import API from "@/api";
import axios from "axios";
import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";
import MiniStatisticSP from "@/components/widgets/statistic/MiniStatisticSP";
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic";
import DailyTraffic from "@/components/widgets/chart/DailyTraffic";
import PoomChart from "@/components/widgets/chart/PoomChart";
import LevelChart from "@/components/widgets/chart/LevelChart";

import EChart from "@/components/chart/echart";
import BoxChart from "@/components/widgets/chart/BoxChart";

import PlainTable from "@/components/widgets/list/PlainTable";
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder";
import { db } from "../firebase/db";

var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

function formatAMPM(date) {
  var hours = date;
  var ampm = hours >= 12 ? "PM" : "AM";
  var strTime = hours + ":00" + " " + ampm;
  return strTime;
}

var today = getMonday(new Date());
var realtoday = new Date();

export default {
  layout: "dashboard",
  components: {
    VWidget,
    MiniStatistic,
    MiniStatisticSP,
    CircleStatistic,
    DailyTraffic,
    PoomChart,
    LevelChart,

    EChart,
    BoxChart,

    PlainTable,
    PlainTableOrder,
  },

  data: () => ({
    color: Material,
    ToDos: 0,

    myrefresh: " ",

    trending: [
      {
        subheading: "Parking Lot Occupancy",
        percent: null,
        valueshow: 100,
        linear: {
          value: null,
          color: "info",
        },
      },
    ],

    currentcar: null,
    currentbike: null,
    currentbus: null,
    currenttruck: null,
    weektotal: null,

    mylocationData: [
      { value: null, name: "Car" },
      { value: null, name: "Bike" },
      { value: null, name: "Bus" },
      { value: null, name: "Truck" },
    ],

    todayroad: null,
    todaypark: null,
    todayavgpark: null,
    todaypeak: null,
    todayleast: null,
  }),

  firebase: {
    ToDos: db.ref("ParkingLot/LotID"),
  },

  beforeCreate() {
    axios.get("https://www.mustavi.com/TotalVehicles/").then((res) => {
      this.currentcar = res.data.data.carCount;
      this.currentbike = res.data.data.motorcycleCount;
      this.currentbus = res.data.data.busCount;
      this.currenttruck = res.data.data.truckCount;

      this.mylocationData[0].value = this.currentcar;
      this.mylocationData[1].value = this.currentbike;
      this.mylocationData[2].value = this.currentbus;
      this.mylocationData[3].value = this.currenttruck;
      this.weektotal =
        this.currentbike +
        this.currentbus +
        this.currenttruck +
        this.currentcar;
      this.weektotal = formatNumber(this.weektotal)
    });

    axios.get("https://www.mustavi.com/summary/").then((res) => {
      this.todayroad = res.data.data.RoadTotal;
      this.todayroad = formatNumber(this.todayroad);

      this.todaypark = res.data.data.ParkTotal;
      this.todayavgpark = res.data.data.AvgPark;

      this.todaypeak = res.data.data.Peak;
      this.todaypeak = this.todaypeak.slice(10, 13);
      this.todaypeak = formatAMPM(this.todaypeak);

      this.todayleast = res.data.data.Least;
      this.todayleast = this.todayleast.slice(10, 13);
      this.todayleast = formatAMPM(this.todayleast);

      // var poomday = new Date();
      // var poomtime = poomday.getHours() + ":" + poomday.getMinutes()
      // this.myrefresh = poomtime;
    });
  },

  computed: {
    siteTrafficData() {
      return API.getMonthVisit;
    },
    locationData() {
      return API.getLocation;
    },
    mypercent() {
      return (this.ToDos.B1X / 3) * 100;
    },
    thismon() {
      return today.toLocaleDateString("en-US", options);
    },
    today() {
      return realtoday.toLocaleDateString("en-US", options);
    },
  },
};
</script>

<style scoped>
.timeseriesbg {
  /* background-color: #00bcd4; */
  background-color: #2994af;
}
.groupbg {
  /* background-color: #96dff1; */
  /* background-image: linear-gradient(to top, #330867 0%, #30cfd0 100%); */
  background-image: linear-gradient(to top, #72afd3 0%, #33dacc 100%);
}

.piebg {

background-image: linear-gradient(to top,#d7fdff 70%, #217cc7 100%);


}
</style>
