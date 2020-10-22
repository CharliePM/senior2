<script>
import axios from "axios";
import VueCharts from "vue-chartjs";
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  props: {
    myrefresh: String,
  },

  data() {
    return {
      responseData: null,
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
      var url = new URL("https://www.mustavi.com/WeeklyDensityLevel/");

      let responseData = (await axios.get(url)).data.data;
      return [
        responseData.Monday,
        responseData.Tuesday,
        responseData.Wednesday,
        responseData.Thursday,
        responseData.Friday,
        responseData.Saturday,
        responseData.Sunday,
      ];
    },

    drawChart(responseData) {
      // Overwriting base render method with actual data.
      this.renderChart(
        {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Total Vehicles",
              backgroundColor: [
                "#80ffdb",
                "#72efdd",
                "#64dfdf",
                "#56cfe1",
                "#4ea8de",
                "#5390d9",
                "#5e60ce",
              ],
              pointBackgroundColor: "white",
              pointBorderColor: "#249EBF",
              data: responseData,
            },
          ],
        },

        {
          
          tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
              label: function(tooltipItems, data) {
                return "Total Vehicles: "
                + data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index].toLocaleString();
               
              }
            },
            
          },
          responsive: true,
          maintainAspectRatio: false,

          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                },
                ticks: {
                  beginAtZero: true,
                  userCallback: function (value, index, values) {
                    value = value.toString();
                    value = value.split(/(?=(?:...)*$)/);
                    value = value.join(",");
                    return value;
                  },
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
          },
        }
      );
    },
  },
};
</script>

