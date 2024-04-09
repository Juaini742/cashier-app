"use client";

import Template from "./components/templates/main";
import {QueryClient, QueryClientProvider} from "react-query";
import MainMenu from "./components/molecules/menu/main";
import {BillContextProvider} from "./context/useBillData";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <BillContextProvider>
        <Template>
          <MainMenu />
        </Template>
      </BillContextProvider>
    </QueryClientProvider>
  );
}
