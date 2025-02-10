"use client";
import { Toaster } from "@/components/ui/toaster";
import { RangePickerProvider } from "@/contexts/RangePickerContext";
import queryClient from "@/lib/react-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MapProvider } from "@/contexts/MapContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RangePickerProvider>
        <MapProvider>
          <Toaster />
          <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
        </MapProvider>
      </RangePickerProvider>
    </QueryClientProvider>
  );
};

export default Providers;
