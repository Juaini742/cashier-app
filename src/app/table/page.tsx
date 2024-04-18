"use client";

import {QueryClient, QueryClientProvider} from "react-query";
import {BillContextProvider} from "../context/useBillData";
import Layout from "../components/templates/template";

const queryClient = new QueryClient();

function Table() {
  return (
    <QueryClientProvider client={queryClient}>
      <BillContextProvider>
        <Layout>
          <div className="container">
            <div className="mt-10">
              <h1 className="text-3xl">
                Welcome To{" "}
                <span className="font-bold text-primary">Our Coffee</span>
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
                culpa.
              </p>
            </div>
          </div>
        </Layout>
      </BillContextProvider>
    </QueryClientProvider>
  );
}

export default Table;
