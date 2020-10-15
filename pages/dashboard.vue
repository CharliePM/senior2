<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h4>
            <b>Today Summary : 16 Oct 2020 </b>
          </h4>
        </v-flex>

        <!-- mini statistic start -->
        <v-flex lg8 sm12 xs12>
          <v-widget title="Overall Statistic" content-bg="white">
            <div slot="widget-content">
              <v-layout row wrap>
                <v-flex lg3 sm6 xs12>
                  <mini-statistic
                    v-if="currentcar"
                    :number="currentcar"
                    icon="fa fa-road"
                    title="Total Pass By"
                    sub-title="Cars"
                    color="color1"
                    iconcolor="white"
                  ></mini-statistic>
                </v-flex>
                <v-flex lg3 sm6 xs12>
                  <mini-statisticSP
                    peaktime="5 PM"
                    besttime="3 AM"
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
          <!-- <circle-statistic
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :color="item.linear.color"
            :value="item.linear.value"
            :percent="item.percent"
          ></circle-statistic> -->
          <circle-statistic
             v-if="ToDos"
            :livecar="ToDos"
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :color="item.linear.color"
            :value= ToDos.B1X
            :percent= mypercent
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
          <v-widget title="Traffic Density Level" content-bg="white">
            <div slot="widget-content">
              <LevelChart style="height: 20rem"></LevelChart>
            </div>
          </v-widget>
        </v-flex>

        <!-- **********************************************WEEK***************************************************** -->

        <v-flex sm12>
          <br />
          <h4><b>Weekly Road Statistic</b></h4>
        </v-flex>

        <!-- Categories Pie -->
        <v-flex lg4 sm12 xs12>
          <v-widget title="Categories Count (This Week)" content-bg="white">
            <div slot="widget-content">
              <e-chart
                v-if="currentcar"
                :number="currentcar"
                :path-option="[
                  ['dataset.source', mylocationData],

                  ['legend.bottom', '0'],
                  [
                    'color',
                    [
                      color.lightBlue.base,
                      color.indigo.base,
                      color.teal.base,
                      color.pink.base,
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
              ></e-chart>
            </div>
          </v-widget>
        </v-flex>

        <!-- Traffic Counting Group Bar -->
        <v-flex lg8 sm12 xs12>
          <v-widget title="Categories Count by Day" content-bg="white">
            <div slot="widget-content">
              <PoomChart></PoomChart>
            </div>
          </v-widget>
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
    livecar: 8,
    

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
    mylocationData: [
      { value: null, name: "Car" },
      { value: null, name: "Bike" },
      { value: null, name: "Bus" },
      { value: null, name: "Truck" },
    ],
  }),

  firebase: {
    ToDos: db.ref("ParkingLot/LotID"),
  },

  beforeCreate() {
    axios
      .get("https://www.mustavi.com/TotalVehicles/?param1=2020-09-04")
      .then((res) => {
        this.currentcar = res.data.data.carCount;
        this.currentbike = res.data.data.motorcycleCount;
        this.currentbus = res.data.data.busCount;
        this.currenttruck = res.data.data.truckCount;

        this.mylocationData[0].value = this.currentcar;
        this.mylocationData[1].value = this.currentbike;
        this.mylocationData[2].value = this.currentbus;
        this.mylocationData[3].value = this.currenttruck;
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
      return (this.ToDos.B1X/3)*100;
    }
  },
};
</script>

<style scoped>
.timeseriesbg {
  background-color: #00bcd4;
  background-color: #2994af;
}
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
