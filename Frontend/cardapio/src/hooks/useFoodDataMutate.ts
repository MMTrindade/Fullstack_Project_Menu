//Responsible for handling POSTS

import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise <any>=> {
    //Response from backend. The only parameter is the backend URL
    const response = axios.post(API_URL + '/food', data);
    return response;
}

export function useFoodDataMutate() {
    //Query client in the provider from main that handles all post and get requests
    const queryClient = useQueryClient();
    const mutate = useMutation ({ 
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] })
            //food-data is the queryKey from useFoodData
        }
    })

    return mutate;
    } 
