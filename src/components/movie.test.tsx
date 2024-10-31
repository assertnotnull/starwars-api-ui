import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import useMovie from "../hooks/useMovie";
import Movie from "./movie";

describe("Movie Component", () => {
  it("renders correctly the loading state", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Movie setSelectedShipId={() => vi.fn()} />
      </QueryClientProvider>
    );

    const element = screen.getByText("Movie");
    expect(element).toBeInTheDocument();
  });

  it("renders correctly the data", async () => {
    const queryClient = new QueryClient();

    globalThis.fetch = vi.fn().mockResolvedValue({
      json: () => ({
        title: "My title",
        opening_crawl: "My opening_crawl",
        starships: ["url1"],
      }),
    });

    render(
      <QueryClientProvider client={queryClient}>
        <Movie setSelectedShipId={() => vi.fn()} />
      </QueryClientProvider>
    );

    const element = screen.getByText("Movie");
    expect(element).toBeInTheDocument();

    await waitFor(() => {
      const element = screen.getByText("My title");
      const openingCrawl = screen.getByText("My opening_crawl");
      expect(element).toBeInTheDocument();
      expect(openingCrawl).toBeInTheDocument();
    });
  });

  it("should test hook", async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    globalThis.fetch = vi.fn().mockResolvedValue({
      json: () => ({ title: "My title", episode_id: 4 }),
    });

    const { result } = renderHook(() => useMovie(), { wrapper });

    await waitFor(() => {
      return expect(result.current.data).toBeTruthy();
    });

    expect(result.current.data?.title).toBe("My title");
  });
});
