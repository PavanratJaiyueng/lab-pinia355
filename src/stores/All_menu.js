import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list=ref([
    {name:'Casio ENTICER LADIES รุ่น LTP-1183A-7A', img:"https://ct.lnwfile.com/_/ct/_raw/na/m7/j0.png", price:1090},
    {name:'Casio ENTICER LADIES รุ่น LTP-1183A-2A', img:"https://ct.lnwfile.com/_/ct/_raw/35/fk/on.png", price:1090 },
    {name:'Casio ENTICER LADIES รุ่น LTP-1165A-7C2', img:"https://ct.lnwfile.com/_/ct/_raw/dz/u0/62.png", price:1190 },
    {name:'Casio ENTICER LADIES รุ่น LTP-1165A-4C', img:"https://ct.lnwfile.com/_/ct/_raw/qn/34/rr.png", price:1190 },
    {name:'Casio ENTICER LADIES รุ่น LTP-1165A-1C', img:"https://ct.lnwfile.com/_/ct/_raw/h5/ld/ar.png", price:1190 },
    {name:'Casio ENTICER LADIES รุ่น LTP-1165A-1C2', img:"https://ct.lnwfile.com/_/ct/_raw/jw/4h/z2.png", price:1190 },
    {name:'Casio Standard รุ่น LTP-1377L-7BDF', img:"https://ct.lnwfile.com/_/ct/_raw/na/6j/ap.jpg", price:1650 },
    {name:'CASIO Standard Analog Ladies Watch รุ่น LTP-1303D-1AV', img:"https://ct.lnwfile.com/_/ct/_raw/q2/zy/ag.png", price:1250 },
    {name:'Casio Standard รุ่น LTP-1377L-2BDF', img:"https://ct.lnwfile.com/_/ct/_raw/6o/yn/wj.jpg", price:1650 },
    {name:'Casio Standard รุ่น LTP-1377D-7BDF', img:"https://ct.lnwfile.com/_/ct/_raw/c5/f9/k6.jpg", price:1650 },
    {name:'CASIO Standard Analog Ladies Watch รุ่น LTP-1303D-4A', img:"https://ct.lnwfile.com/_/ct/_raw/uv/eh/v0.jpg", price:1250 },
    {name:'Casio Standard รุ่น LTP-E111GBL-2AV', img:"https://ct.lnwfile.com/_/ct/_raw/sd/iv/c0.jpg", price:1690 },
])

return { menu_list }
})



