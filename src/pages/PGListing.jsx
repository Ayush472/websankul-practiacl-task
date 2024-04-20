import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import Api from "../api/apiRoutes";
import { Col, Row } from "antd";
import CardList from "../components/cardList/CardList";
import { useInView } from "react-intersection-observer";
async function getPgList(pageParam) {
  const city = "Gandhinagar";
  const projectType = ["pgHostel"];
  const formattedProjectType = JSON.stringify(projectType);
  try {
    const response = await axios.get(
      `https://api.housivity.com/api/v1${Api.property}?city=${city}&projectType=${formattedProjectType}&page=${pageParam}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching PG list:", error);
    throw error;
  }
}

const PGListing = () => {
  const { ref, inView } = useInView();
  const {
    isPending,
    error,
    data,
    fetchNextPage,
    fetchPreviousPage,
    isFetching,
    hasNextPage,
    hasPreviousPage,
    isFetchingNextPage,
    isLoading,
    isFetchingPreviousPage,
    ...result
  } = useInfiniteQuery({
    queryKey: ["PGListing"],
    queryFn: ({ pageParam = 1 }) => getPgList(pageParam),
    staleTime: 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? null : allPages.length + 1;
    },
  });

  useEffect(() => {
    console.log("Fetching next page", inView);
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
      {/* PGListing */}
      <Row style={{ justifyContent: "center" }}>
        {data &&
          data.pages.map((page, index) =>
            page.propertyList.map((item, index) => (
              <CardList key={index} itemData={item} />
            ))
          )}
      </Row>
      {isLoading ? (
        <div>Loading...</div>
      ) : isFetchingNextPage ? (
        <div>Loading more...</div>
      ) : (
        hasNextPage && <div ref={ref} className="h-4 w-full bg-blue-200"></div>
      )}
    </>
  );
};

export default PGListing;
