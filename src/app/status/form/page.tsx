"use client";

import MainCreateProduct from "@/app/components/molecules/status/form/main";
import Layout from "@/app/components/templates/template";
import {BillContextProvider} from "@/app/context/useBillData";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function CreateProduct() {
  return (
    <QueryClientProvider client={queryClient}>
      <BillContextProvider>
        <Layout>
          <MainCreateProduct />
        </Layout>
      </BillContextProvider>
    </QueryClientProvider>
  );
}

export default CreateProduct;
