import type { ReactElement } from "react";
import ClassroomInfoCard from "../components/cards/ClassroomInfoCard";
import Layout from "../components/layout";
import type { NextPageWithLayout } from "./_app";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../utils/supabaseClient";
import { PostgrestResponse } from "@supabase/supabase-js";
import { Classroom } from "../types";
import useClassrooms from "../hooks/useClassrooms";

const Page: NextPageWithLayout = () => {
  const fetchClassrooms = async (): Promise<PostgrestResponse<Classroom>> => {
    const response = await supabase.from<Classroom>("classrooms").select();
    if (response.error) {
      console.log(response.error.message);
    }
    return response;
  };

  const { isError, isLoading, data } = useClassrooms();

  if (isError) {
    return <h1>Error...</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap">
        {data?.data?.map((classroom: Classroom) => {
          return (
            <ClassroomInfoCard
              classroomId={classroom.id}
              category={classroom.category}
              ratio={classroom.ratio}
              teachers={classroom.teachers}
              enrolled={classroom.enrolled}
              capacity={classroom.capacity}
              checkedIn={classroom.checked_in}
              key={classroom.id}
            />
          );
        })}
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout active="dashboard">{page}</Layout>;
};

export default Page;
