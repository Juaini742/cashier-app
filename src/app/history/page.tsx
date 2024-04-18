"use client";

import {QueryClient, QueryClientProvider} from "react-query";
import {BillContextProvider} from "../context/useBillData";
import Layout from "../components/templates/template";
import MainHistory from "../components/molecules/history/main";

const queryClient = new QueryClient();

function History() {
  return (
    <QueryClientProvider client={queryClient}>
      <BillContextProvider>
        <Layout>
          <MainHistory />
        </Layout>
      </BillContextProvider>
    </QueryClientProvider>
  );
}

export default History;
