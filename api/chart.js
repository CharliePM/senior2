import axios from "axios";

export default {
  data() {
    return {
      carcount: [],
    };
  },
  Create() {
    axios
      .get("http://www.mustavi.com/TotalVehicles/?param1=2020-09-04")
      .then((res) => {
        this.carcount = res.data.data.carCount;
      });
  },

};

const totalTruck = 540;

const locationData =
  [
    {
      value: totalTruck,
      name: 'Car'
    },
    {
      value: 35,
      name: 'Bike'
    },
    {
      value: 25,
      name: 'Bus'
    },
    {
      value: 10,
      name: 'Truck'
    },
    {
      value: 10,
      name: 'Other'
    }
  ];

const range = (start, end) => new Array(end - start).fill(start).map((el, i) => start + i);

const shortMonth = [
  'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
];

const monthVisitData = shortMonth.map(m => {
  return {
    'month': m,
    'Car': Math.floor(Math.random() * 10),
    'Bike': Math.floor(Math.random() * 10),
    'Bus': Math.floor(Math.random() * 50),
    'Truck': Math.floor(Math.random() * 50),
  };
});


export {
  monthVisitData,
  locationData,
};

