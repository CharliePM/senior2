<script>
// import { Line } from "vue-chartjs";
// import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
// import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
// import { random } from "@/shared/utils";
import axios from "axios";
import VueCharts from "vue-chartjs";
import { HorizontalBar, Bar, Line } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Traffic Level",
            backgroundColor: [
              "#72efdd",
              "#64dfdf",
              "#56cfe1",
              "#5390d9",
              "#5e60ce",  
            ],
            data: [7, 6, 8, 7, 5, 0,0],
          },
        ],
      },

      {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          xAxes: [
            {
              gridLines: {
                display: true,
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
};
</script>