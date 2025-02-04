require("dotenv").config();
const express = require("express");

const port = process.env.PORT;

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Métodos permitidos
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Encabezados permitidos
  next();
});

app.get("/", (req, res) => {
  res.send(
    {
      "rooms": [
        {
          "id": 1,
          "NumCamas": 1,
          "name": "Despertar",
          "Disponible": "Disponible",
          "precioNoche": 150000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": true,
            "spa": false,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://www.momondo.com.co/rimg/himg/c0/f3/49/expedia_group-123248-718cf6-955597.jpg?width=968&height=607&crop=true",
            "vista": "https://www.momondo.com.co/rimg/himg/88/fb/79/expediav2-123248-3591475457-659215.jpg?width=968&height=607&crop=true",
            "baño": "https://www.momondo.com.co/rimg/himg/4f/20/b6/expedia_group-123248-f69021-030230.jpg?width=968&height=607&crop=true"
          },
          "reservas": [
            {
              "inicio": "2025-01-19",
              "fin": "2025-01-22",
              "clienteId": 1
            }
          ]
        },
        {
          "id": 2,
          "NumCamas": 1,
          "name": "Calidez",
          "Disponible": "Disponible",
          "precioNoche": 100000,
          "NumPersonas": 1,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": false,
            "spa": false,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2025/01/hotel-en-mexico-que-parece-castillo1.jpg?resize=600%2C451&ssl=1",
            "vista": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/591648966.jpg?k=1a90237b228e476b9d3169d2b2890c7056e3c4a8d2151bbc17c9bedf02eb22a6&o=&hp=1",
            "baño": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/591649752.jpg?k=dd338c1c5f2e8f56f52d0c5605adc0dece4181326ebf8dcd97d4b1fc2dc3fe4e&o=&hp=1"
          },
          "reservas": []
        },
        {
          "id": 3,
          "NumCamas": 1,
          "name": "Bella Vista",
          "Disponible": "Disponible",
          "precioNoche": 350000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": false,
            "spa": true,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/507758183.jpg?k=35bc4bd62f2e2686ce9e9d814c12a2960731a5c03d31b24adb2494ad0605fe86&o=&hp=1",
            "vista": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593426997.jpg?k=147dfcb7c56a9b2b0e471f4d24ade339425771f6b97cdf885e146ca996f0c888&o=&hp=1",
            "baño": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/258982289.jpg?k=f68df5504bc301acc8ccfa9cb0f8887550becc5d58a0c52e6da63e2c791c07c9&o=&hp=1"
          },
          "reservas": [
            {
              "inicio": "2025-01-22",
              "fin": "2025-01-25",
              "clienteId": 1
            }
          ]
        },
        {
          "id": 4,
          "NumCamas": 2,
          "name": "Gardens",
          "Disponible": "Disponible",
          "precioNoche": 100000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": false,
            "spa": false,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/591649779.jpg?k=c48f4bf7029f0f12a32505721933f1a0696d0f03c44523e7fd456f1d5e0b9bf4&o=&hp=1",
            "vista": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/591648893.jpg?k=45b917c59c014c4d3619f7dae7af8dd2f8fb81c19a56cd4e58bedd52b78260fb&o=&hp=1",
            "baño": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527207384.jpg?k=9648e08ffd5b3a865bce160b8e4eee7fd8d6e2275881a4e3e6fbd7ef30641e12&o=&hp=1"
          },
          "reservas": [
            {
              "inicio": "2025-01-20",
              "fin": "2025-01-22",
              "clienteId": 1
            }
          ]
        },
        {
          "id": 5,
          "NumCamas": 2,
          "name": "Atico",
          "Disponible": "Disponible",
          "precioNoche": 100000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": false,
            "spa": false,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/593427962.jpg?k=8d46416ed6f06bb16c4df0c6f86eab28647974cdb48ab97da8f707b50e98d584&o=&hp=1",
            "vista": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/468165505.jpg?k=b77577cdcaf2e55b5b247484517643eaac5a75a24859980ea0c69ef918c1991f&o=&hp=1",
            "baño": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/527202997.jpg?k=0f0cfcd5af448a24dc56e5b76f59bbdc176565a13aa6d0f3ffaf70c6c425a154&o=&hp=1"
          },
          "reservas": []
        },
        {
          "id": 6,
          "NumCamas": 1,
          "name": "jardines",
          "Disponible": "Disponible",
          "precioNoche": 200000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": false,
            "spa": false,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/468074988.jpg?k=b388eb34e9b718abae545c8bc6f2c68dbf137c765a486dac8b29e23a4940767a&o=&hp=1",
            "vista": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/468144427.jpg?k=b017da3deb9825565e90d23422321f7af802ab5799296f5aa082d0ef84f7f695&o=&hp=1",
            "baño": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/468068326.jpg?k=73cd647e5752440c3a67c08e69cc4c8dcd6f1c6d991b7b8d54045eb5b618e406&o=&hp=1"
          },
          "reservas": []
        },
        {
          "id": 7,
          "NumCamas": 1,
          "name": "Frescura",
          "Disponible": "Disponible",
          "precioNoche": 200000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": true,
            "spa": true,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/d5/20/b1/20160702-155155-largejpg.jpg?w=1200&h=-1&s=1",
            "vista": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d2/d5/fb/photo0jpg.jpg?w=1200&h=-1&s=1",
            "baño": " "
          },
          "reservas": []
        },
        {
          "id": 8,
          "NumCamas": 1,
          "name": "jardines",
          "Disponible": "Disponible",
          "precioNoche": 200000,
          "NumPersonas": 2,
          "ubicacion": "Mesa de los Santos, Santander",
          "servicios": {
            "internet": true,
            "minibar": false,
            "jacuzzi": true,
            "spa": true,
            "comida": true
          },
          "imagenes": {
            "habitacion": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/225939843.jpg?k=aa5afb388bd757c46cb1b68ec69e2a5eeb32d73f7066af1483b7f23ebc9ca02a&o=&hp=1",
            "vista": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362483024.jpg?k=d49232c5f01ddd12e3dffef09841fce1143b7025dcb56499eae7db02761bb4fb&o=&hp=1",
            "baño": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/362483028.jpg?k=f0cb75b1cc69df786c7d6996346669b9455f5c01bef9dfee38940520305440f4&o=&hp=1"
          },
          "reservas": []
        }
      ],
      "clients": [
        {
          "id": 1,
          "user": "jenni",
          "password": "123",
          "nombre": "Jennifer",
          "apellido": "Arcs",
          "email": "jenni@gmail.com"
        }
      ],
      "profile": {
        "name": "typicode"
      }
    }
    
  );
});

app.listen(port, () => {
  console.log(`Example app listening at port: ${port}`);
});
