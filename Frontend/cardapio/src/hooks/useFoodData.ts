//Axios: library used to trigger http requests
import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise <FoodData[]> => {
    //Response from backend. The only parameter is the backend URL
    const response = axios.get(API_URL + '/food');
    return response;
}

export function useFoodData() {
    const query = useQuery ({ 
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    } 

}