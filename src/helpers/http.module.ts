import axios from "axios";
import { base_url } from "../constants/url.constants";

const httpModule = axios.create({
    baseURL:base_url
});

export default httpModule;