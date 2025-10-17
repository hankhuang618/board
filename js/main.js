// 导入 Vue.js 库
import Vue from 'vue';

// 导入 Vue 组件
import App from './App.vue';

// 导入 axios 库
import axios from 'axios';

// 导入 Chart.js 库
import Chart from 'chart.js/auto';

// 将 Chart.js 插件注册为全局变量（如果需要的话）
Chart.register(...registerables);

// 导入 Vue-Chartjs 库
import { Chart as VueChart, PieController } from 'vue-chartjs@3';

// 将 VueChartJs 设置为全局变量
window.VueChartJs = require('vue-chartjs@3');
