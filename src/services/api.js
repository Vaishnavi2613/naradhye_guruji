import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const createBooking = (data) =>
  API.post("/bookings", data);

export const fetchClientByName = (name) =>
  API.get(`/users/${name}`);
