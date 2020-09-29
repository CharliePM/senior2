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

  

  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart(
      {
        labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
        datasets: [
          {
            label: "Car",
            backgroundColor: "#1333a6",
            data: [40, 39, 50, 40, 39, 50, 40],
          },
          {
            label: "Bike",
            backgroundColor: "#317ae1",
            data: [80, 69, 70, 70, 59, 90, 97],
          },
          {
            label: "Bus",
            backgroundColor: "#1fdedb",
            data: [70, 49, 60, 58, 39, 80, 70],
          },
          {
            label: "Truck",
            backgroundColor: "#fffcbf",
            data: [90, 79, 80, 70, 59, 40, 90],
          },
        ],
      },

      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>