<script>
// import { Line } from "vue-chartjs";
// import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
// import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
// import { random } from "@/shared/utils";
import axios from "axios";
import VueCharts from "vue-chartjs";
import { Bar, Line } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    myrefresh: String,
  },

  data() {
    return {
      responseData: null,
    };
  },

  watch: {
    refresh: {
      immediate: true,
      async handler() {
        this.drawChart(await this.GetAPIData());
      },
    },
  },

  methods: {
    async GetAPIData() {
      var url = new URL(
        "https://www.mustavi.com/GroupBarchart/"
      );
 
      let car = (await axios.get(url)).data.data;
      return [
        car.Monday_car,
        car.Tuesday_car,
        car.Wednesday_car,
        car.Thursday_car,
        car.Friday_car,
        car.Saturday_car,
        car.Sunday_car,

        car.Monday_bus,
        car.Tuesday_bus,
        car.Wednesday_bus,
        car.Thursday_bus,
        car.Friday_bus,
        car.Saturday_bus,
        car.Sunday_bus,

        car.Monday_bike,
        car.Tuesday_bike,
        car.Wednesday_bike,
        car.Thursday_bike,
        car.Friday_bike,
        car.Saturday_bike,
        car.Sunday_bike,

        car.Monday_truck,
        car.Tuesday_truck,
        car.Wednesday_truck,
        car.Thursday_truck,
        car.Friday_truck,
        car.Saturday_truck,
        car.Sunday_truck,
      
      ];
    },

    drawChart(car) {
      // Overwriting base render method with actual data.

      this.renderChart(
        {
          labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
          datasets: [
            {
              label: "Car",
              backgroundColor: "#1333a6",
              data: [car[0],car[1],car[2],car[3],car[4],car[5],car[6]]
              // data: [700,800,755,600,800]
            },
            {
              label: "Bike",
              backgroundColor: "#317ae1",
              data: [car[14],car[15],car[16],car[17],car[18],car[19],car[20]]
              // data: [658,900,455,670,740]
            },
            {
              label: "Bus",
              backgroundColor: "#80ffdb",
              data: [car[7],car[8],car[9],car[10],car[11],car[12],car[13]]
              // data: [70,80,75,60,80]
            },
            {
              label: "Truck",
              backgroundColor: "#fffcbf",
              data: [car[21],car[22],car[23],car[24],car[25],car[26],car[27]]
              // data: [50,40,25,35,47]
            },
          ],
        },

        {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: "white",
            },
            display: true,
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white",
                },
                gridLines: {
                  display: true,
                  color: "#CDCDD2",
                },
              },
            ],
          },
        }
      );
    },
  },

  mounted() {
    // Overwriting base render method with actual data.
  },
};
</script>