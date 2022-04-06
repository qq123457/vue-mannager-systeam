import * as echarts from "echarts";

import ChinaMapData from "../map/china.json";
// 注册中国地图
echarts.registerMap("china", ChinaMapData);
export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el);

  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options);
  };
  const updateResize = () => {
    echartInstance.resize();
  };
  window.addEventListener("resize", () => {
    echartInstance.resize();
  });

  return {
    echartInstance,
    setOptions,
    updateResize
  };
}
