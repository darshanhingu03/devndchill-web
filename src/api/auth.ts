"use client";
import AuthService from "@/services/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

const SIGNIN_KEY = ["signin"];
const CLIENTINFO_KEY = "clientInfo-key";

export const getSignInQuery = async <T>(data: T) => {
  return new AuthService().signIn(data);
};

export const useSignInMutation = <T>() => {
  return useMutation<AxiosResponse<T>, AxiosError, T>({
    mutationKey: SIGNIN_KEY,
    mutationFn: (data: T) => getSignInQuery(data),
  });
};

export const getClientInfoQuery = async <T>() => {
  const response = await new AuthService().getclientrequest();
  return response.data;
};
export const useClientInfoQuery = <T>() => {
  return useQuery({
    queryKey: [CLIENTINFO_KEY],
    queryFn: () => getClientInfoQuery(),
  });
};
