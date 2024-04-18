"use client";

import {QueryClient, QueryClientProvider} from "react-query";
import {BillContextProvider} from "../context/useBillData";
import Layout from "../components/templates/template";
import MainStatus from "../components/molecules/status/main";

const queryClient = new QueryClient();

function Status() {
  return (
    <QueryClientProvider client={queryClient}>
      <BillContextProvider>
        <Layout>
          <MainStatus />
        </Layout>
      </BillContextProvider>
    </QueryClientProvider>
  );
}

export default Status;
