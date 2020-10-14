<script>
// import { Line } from "vue-chartjs";
// import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
// import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
// import { random } from "@/shared/utils";
import axios from "axios";
import VueCharts from "vue-chartjs";
import { Bar, Line } from "vue-chartjs";

export default {
  extends: Line,

  data() {
    return {
      gradient: null,
    };
  },

  mounted() {
    // Overwriting base render method with actual data.

    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 50, 0, 450);

    this.gradient.addColorStop(0, "#29edff"  );
    this.gradient.addColorStop(0.5, "#55c0c4");
    this.gradient.addColorStop(1, "#1f81a9");

    this.renderChart(
      {
        labels: [
          "9 AM",
          "10 AM",
          "11 AM",
          "Noon",
          "13 PM",
          "14 PM",
          "15 PM",
          "16 PM",
          "17 PM",
          "18 PM",
          "19 PM",
          "20 PM",
          "21 PM",
          "22 PM",
          "23 PM",
        ],
        datasets: [
          {
            label: "Total Vehicles",
            borderColor: "#0074e1",
            pointBackgroundColor: "lightblue",
            borderWidth: 2,
            pointBorderColor: "white",
            backgroundColor: this.gradient,
            data: [40, 39, 10, 40, 39, 80, 40, 100, 80, 40, 50, 70, 50, 40, 50],
          },
        ],
      },
      {
        responsive: true,
        maintainAspectRatio: false,

        datasetStrokeWidth: 3,
        pointDotStrokeWidth: 4,
        tooltipFillColor: "rgba(0,0,0,0.8)",
        tooltipFontStyle: "bold",
        tooltipTemplate:
          "<%if (label){%><%=label + ' hod' %>: <%}%><%= value + '°C' %>",
        scaleLabel: "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",

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
};
</script>