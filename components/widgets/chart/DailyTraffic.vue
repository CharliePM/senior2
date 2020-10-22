<script>
// import { Line } from "vue-chartjs";
// import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
// import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
// import { random } from "@/shared/utils";
import axios from "axios";
import VueCharts from "vue-chartjs";
import { Bar, Line } from "vue-chartjs";
import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

export default {
  extends: Line,
  props: {
    myrefresh: String,
  },

  data() {
    return {
      gradient: null,
    };
  },

  watch: {
    myrefresh: {
      immediate: true,
      async handler() {
        this.drawChart(await this.GetAPIData());
      },
    },
  },

  methods: {
    async GetAPIData() {
      var url = new URL("https://www.mustavi.com/DailyTraffic/");

      let car = (await axios.get(url)).data.data;
      return [
        car.t0, car.t1, car.t2 ,car.t3, car.t4, car.t5, car.t6, car.t7, car.t8, car.t9, car.t10, car.t11, car.t12,
        car.t13, car.t14, car.t15, car.t16, car.t17, car.t18, car.t19, car.t20, car.t21, car.t22, car.t23,
        //YESTERDAY
        car.y0, car.y1, car.y2 ,car.y3, car.y4, car.y5, car.y6, car.y7, car.y8, car.y9, car.y10, car.y11, car.y12,
        car.y13, car.y14, car.y15, car.y16, car.y17, car.y18, car.y19, car.y20, car.y21, car.y22, car.y23,
      ];
    },

    drawChart(car) {
      // Overwriting base render method with actual data.

      this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 50, 0, 450);
      this.gradient.addColorStop(0, "#29edff");
      this.gradient.addColorStop(0.5, "#55c0c4");
      this.gradient.addColorStop(1, "#1f81a9");

      function getTickLimit() {
        return window.innerWidth < 300 ? 6 : 12;
      }

      this.renderChart(
        {
          labels: [
            "Mid", "1 AM",  "2 AM",  "3 AM",  "4 AM",  "5 AM",  "6 AM", "7 AM",  "8 AM",  "9 AM", "10 AM", "11 AM",
            "Noon",  "13 PM", "14 PM", "15 PM",  "16 PM", "17 PM", "18 PM",  "19 PM",  "20 PM", "21 PM", "22 PM",  "23 PM",
          ],
          mylabels: [
            "Today", "Yesterday"
          ],
          datasets: [
            {
              label: "Today",
              borderColor: "#0074e1",
              pointBackgroundColor: "#90e0ef",
              borderWidth: 2,
              pointBorderColor: "#00b4d8",
              backgroundColor: this.gradient,
              data: [car[0], car[1], car[2], car[3], car[4], car[5], car[6], car[7], car[8], car[9], car[10], car[11], 
              car[12], car[13], car[14], car[15], car[16], car[17], car[18], car[19], car[20], car[21], car[22], car[23]]
            },
            {
              label: "Yesterday",
              borderColor: "#f08080",
              pointBackgroundColor: "#de327f",
              pointHoverBackgroundColor: "#fff",
              borderWidth: 1.5,
           
              backgroundColor: null,
              borderDash: [8, 5],
              data: [car[24], car[25], car[26], car[27], car[28], car[29], car[30], car[31], car[32], car[33], car[34], car[35], 
              car[36], car[37], car[38], car[39], car[40], car[41], car[42], car[43], car[44], car[45], car[46], car[47]]
            },
          ],
        },
        {

          tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(tooltipItems, data) {
                return  data.mylabels[tooltipItems.datasetIndex] + ": " 
                + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index].toLocaleString();
               
              }
            },
            
          },
          hover: {
            mode: 'index',
            intersect: false
          },

          responsive: true,
          maintainAspectRatio: false,

          legend: {
            color: "white",
            display: false,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  autoSkip: true,
                  maxTicksLimit: getTickLimit()
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                  userCallback: function(value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(',');
                    return value;
                  },
                },
                gridLines: {
                  display: true,
                  color: "#CDCDD2",
                },
              },
            ],
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3
            }
          },
        }
      );
    },
  },
};
</script>