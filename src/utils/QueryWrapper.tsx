"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { QueryClientProvider, hydrate } from "@tanstack/react-query";
import { getQueryClient } from "./getQueryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface Props {
  children: ReactNode;
  dehydratedState?: any;
}

const QueryWrapper = ({ children, dehydratedState }: Props) => {
  const queryClient = getQueryClient();
  const [isMounted, setIsMounted] = useState(false);
  const isOpenDevtool = process.env.NODE_ENV === "development";

  useEffect(() => {
    setIsMounted(true); // Ensure the component only mounts on the client side
  }, []);

  useEffect(() => {
    if (dehydratedState) {
      hydrate(queryClient, dehydratedState); // Hydrate the state manually
    }
  }, [dehydratedState, queryClient]);

  if (!isMounted) {
    return null; // Prevent rendering during SSR
  }

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {isOpenDevtool && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
};

export default QueryWrapper;
