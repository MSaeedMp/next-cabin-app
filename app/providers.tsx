"use client";
import { Toaster } from "@/components/ui/toaster";
import { RangePickerProvider } from "@/contexts/RangePickerContext";
import queryClient from "@/lib/react-query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import { MapProvider } from "@/contexts/MapContext";
import { AuthProvider } from "@/contexts/AuthContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <RangePickerProvider>
        <MapProvider>
          <AuthProvider>
            <Toaster />
            <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
          </AuthProvider>
        </MapProvider>
      </RangePickerProvider>
    </QueryClientProvider>
  );
};

export default Providers;
